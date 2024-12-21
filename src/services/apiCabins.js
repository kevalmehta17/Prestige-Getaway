import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin data could not be fetched");
  }
  return data;
}

export async function creatCabins(newCabin) {
  if (!newCabin || !newCabin.name || !newCabin.image) {
    console.error("Invalid cabin data", newCabin);
    throw new Error("Invalid cabin data");
  }

  const file = newCabin.image;
  if (!file?.name) {
    throw new Error("Invalid image file");
  }

  // Generate unique image name
  const imageName = `${Math.random()}-${file.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Insert cabin data into Supabase
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin data could not be created");
  }

  // Upload image to Supabase storage
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, file);

  if (storageError) {
    // Delete the cabin record if image upload fails
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin data could not be deleted");
  }
  return data;
}
