import { CardBody, CardHeader, Typography } from "@material-tailwind/react";

const PopulerItemCard = ({ item }) => {
  return (
    <div>
      <CardHeader className="h-[250px] w-52 lg:h-[300px] lg:w-60 rounded-lg shadow-md  shadow-black mx-auto">
        <div
          //   style={{
          //     backgroundImage: `url(${item?.ImageUrl})`,
          //   }}
          className={`absolute inset-0 m-0 h-full  rounded-none bg-[url('${item?.ImageUrl}')] bg-cover bg-center`}
        ></div>
      </CardHeader>
      <CardBody className="text-center">
        <Typography color="blue-gray" className="font-medium" textGradient>
          {item?.Name}
        </Typography>
      </CardBody>
    </div>
  );
};

export default PopulerItemCard;
