import { ConsultWorkInterface } from "@/interface/commonAll.interface";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function ConsultantWorkCard({ image, name, para,paraShow }: ConsultWorkInterface) {
  return (
    <Box className="int_screen_mocks">
      <figure className="main_img">
        <Image src={image} width={126} height={121} alt="" />
      </figure>
      <Box className="int_screen_mocks_rt">
        <Typography variant="h3" className="mock_head">
          {name}
        </Typography>
        {
          paraShow?
          ""
          :
          <Typography variant="body1">{para}</Typography>
        }
        
      </Box>
    </Box>
  );
}

export default ConsultantWorkCard;
