import {
  CardBody,

  Typography,
} from "@material-tailwind/react";

const PopulerItemCard = ({ item }) => {
  return (
    <div>
      <div className="h-[250px] w-52 lg:h-[300px] lg:w-60 rounded-lg shadow-md  shadow-black mx-auto overflow-hidden">
        <img
          src={item.ImageUrl}
          alt="Food Image"
          className="w-full h-full object-cover"
        />
      </div>
      <CardBody className="text-center">
        <Typography color="blue-gray" className="font-medium" textGradient>
          {item?.Name}
        </Typography>
      </CardBody>
    </div>
  );
};

export default PopulerItemCard;
