import { CardBody, CardHeader, Typography } from "@material-tailwind/react";

const PopulerItemCard = () => {
  return (
    <div>
      <CardHeader className="h-[250px] w-52 lg:h-[300px] lg:w-60 rounded-lg shadow-md  shadow-black mx-auto">
        <div className="absolute inset-0 m-0 h-full  rounded-none bg-[url('http://www.api.technicaltest.quadtheoryltd.com/Resources/Image\\Cappuchino.jpg')] bg-cover bg-center"></div>
      </CardHeader>
      <CardBody className="text-center">
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
    </div>
  );
};

export default PopulerItemCard;
