import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function AddMore() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        size="sm"
        className=" hidden md:block normal-case font-normal bg-transparent"
        onClick={handleOpen}
      >
        <p className="text-[#ff5600] text-xl">AddMore</p>
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <h1 className="text-center text-4xl my-4 font-bold">Add Food</h1>
        <DialogBody>
          <div>
            <form method="dialog"></form>
            <form className="md:grid md:gap-6 gap-2 grid-cols-2 ">
              <div>
                <label htmlFor="Price">Name</label>
                <input
                  type="text"
                  placeholder="Item Name"
                  className="w-full mt-2 text-sm rounded border bg-gray-50 px-3 py-2 text-dark outline-none "
                />{" "}
              </div>
              <div>
                <label htmlFor="Price">Price</label>
                <input
                  type="number"
                  placeholder="Item Price"
                  className="w-full mt-2 rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
                />
              </div>
              <div className="form-control">
                <label className="cursor-pointer flex justify-between items-center label p-0">
                  <span className="label-text">Is Popular?</span>
                  <input type="checkbox" className="checkbox " />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer flex justify-between items-center label p-0">
                  <span className="label-text">Is Recommended?</span>
                  <input type="checkbox" className="checkbox " />
                </label>
              </div>
              <input type="file" />
            </form>
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
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
