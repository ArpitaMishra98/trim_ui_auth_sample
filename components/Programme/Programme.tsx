/* eslint-disable react/no-unescaped-entities */
import { ProgrammeWrapper } from "@/styles/StyledComponents/ProgrammeWrapper";
import Icon1 from "@/ui/Icons/Icon1";
import Icon2 from "@/ui/Icons/Icon2";
import Icon3 from "@/ui/Icons/Icon3";
import Icon4 from "@/ui/Icons/Icon4";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { productSlider } from "pages/complete-payment";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const Programme = () => {
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();
  return (
    <Container fixed>
      <Box className="wrap_cmn_capSteps">
        <ProgrammeWrapper>
          <Box className="programme_content">
            <Typography variant="h3">Your program</Typography>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <Box className="content_fig">
                  <Slider
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                    slidesToShow={1}
                    arrows={false}
                  >
                    {productSlider.map((item) => (
                      <figure className="imgFigBig">
                        <Image
                          src={item?.image}
                          width={703}
                          height={646}
                          alt="product"
                        />
                      </figure>
                    ))}
                  </Slider>
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={3}
                    swipeToSlide
                    focusOnSelect
                    className="slider_ol"
                  >
                    {productSlider.map((item) => (
                      <figure className="imgFigSmall">
                        <Image
                          src={item?.image}
                          width={703}
                          height={646}
                          alt="product"
                        />
                      </figure>
                    ))}
                  </Slider>
                </Box>
              </Grid>
              <Grid item md={8} xs={12}>
                <Box className="content_text">
                  <Typography variant="h4" className="sec_hds">
                    Weight Reset Program with medication (semaglutide)
                  </Typography>
                  <Typography variant="h4" className="no_head_case">
                    $375
                    <Typography variant="caption">
                      for your first order*
                    </Typography>
                  </Typography>
                  <Typography>
                    *If the prescribed medication is different to this amount,
                    we'll organise a refund or additional payment to correct any
                    discrepancies.
                  </Typography>
                  <List>
                    <ListItem>
                      <Typography component="i">
                        <Icon1 />
                      </Typography>
                      Free and discreet delivery
                    </ListItem>
                    <ListItem>
                      <Typography component="i">
                        <Icon2 />
                      </Typography>
                      Ongoing practitioner and medical support
                    </ListItem>
                    <ListItem>
                      <Typography component="i">
                        <Icon3 />
                      </Typography>
                      1:1 Health coaching in your pocket
                    </ListItem>
                    <ListItem>
                      <Typography component="i">
                        <Icon4 />
                      </Typography>
                      Private Facebook community
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="footer_content">
            <Typography>
              If you’re found unsuitable during your consult or decide not to
              proceed with our program after your practitioner call, we will
              refund you the amount in full.
            </Typography>
          </Box>
        </ProgrammeWrapper>
      </Box>
    </Container>
  );
};
