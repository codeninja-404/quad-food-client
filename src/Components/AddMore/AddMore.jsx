import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { ItemContext } from "../../Api/ItemProvider";

const imgbbKEy = import.meta.env.VITE_APP_IMGBBKEY;
const uploadAPI = `https://api.imgbb.com/1/upload?key=${imgbbKEy}`;

export function AddMore() {
  const { data, setData } = useContext(ItemContext); // You might not need data and loading here
  const [Id, setId] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (FromData) => {
    try {
      const imageFile = { image: FromData?.photourl[0] };
      const res = await axios.post(uploadAPI, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const ImageUrl = res.data?.data?.display_url;
      setId((prevId) => prevId + 1);
      const Name = FromData?.Name;
      const Price = parseInt(FromData?.Price);
      const IsPopular = FromData?.IsPopular || false;
      const IsRecommended = FromData?.IsRecommended || false;
      if (IsPopular === false && IsRecommended === false) {
        handleOpen();
        return toast.error(
          "Please select at least one option (Popular or Recommended)"
        );
      }
      const newItem = {
        Id,
        Name,
        Price,
        ImageUrl,
        IsPopular,
        IsRecommended,
      };

      setData([...data, newItem]);
      console.log(data);
    } catch (error) {
      toast.error("An error occurred while adding the food item.");
    }
    toast.success("Food item added successfully.");
    handleOpen();
  };

  return (
    <>
      <Button
        size="sm"
        className=" hidden md:block normal-case font-normal bg-transparent"
        onClick={handleOpen}
      >
        <p className="text-[#ff5600] text-xl">AddMore</p>
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ... (existing form fields) */}
        <Dialog open={open} handler={handleOpen}>
          <h1 className="text-center text-4xl my-4 font-bold">Add Food</h1>
          <DialogBody>
            <div>
              <div className="md:grid md:gap-6 gap-2 grid-cols-2 ">
                <div>
                  <label htmlFor="Price">Name</label>
                  <input
                    {...register("Name", { required: true })}
                    type="text"
                    placeholder="Item Name"
                    className="w-full mt-2 text-sm rounded border bg-gray-50 px-3 py-2 text-dark outline-none "
                  />{" "}
                  {errors.Name?.type === "required" && (
                    <p className="text-red-500 text-sm" role="alert">
                      Name is required
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="Price">Price</label>
                  <input
                    {...register("Price", { required: true })}
                    type="number"
                    placeholder="Item Price"
                    className="w-full mt-2 rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
                  />
                  {errors.Price?.type === "required" && (
                    <p className="text-red-500 text-sm" role="alert">
                      Price is required
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="cursor-pointer flex justify-between items-center label p-0">
                    <span className="label-text">Is Popular?</span>
                    <input
                      {...register("IsPopular")}
                      type="checkbox"
                      className="checkbox "
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer flex justify-between items-center label p-0">
                    <span className="label-text">Is Recommended?</span>
                    <input
                      {...register("IsRecommended")}
                      type="checkbox"
                      className="checkbox "
                    />
                  </label>
                </div>
                <div>
                  <input
                    {...register("photourl", { required: true })}
                    type="file"
                  />
                  {errors.photourl?.type === "required" && (
                    <p className="text-red-500 text-sm" role="alert">
                      Food Image is required
                    </p>
                  )}
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="gradient"
              color="green"
            >
              <span>Submit</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </form>
    </>
  );
}
