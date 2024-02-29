import { StepWrapperHeaderStyled } from "@/styles/StyledComponents/StepWrapperHeaderStyled";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import InstagramIcon from "@/ui/Icons/InstagramIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function StepWrapperHeader() {
  return (
    <StepWrapperHeaderStyled>
      <Box className="header_follow_top">
        <Container fixed>
          <Box className="header_followerin">
            <Typography variant="body1" className="flw_btnhead">Follow Us:</Typography>
            <Box className="social_md_hdr">
              <List>
                <ListItem>
                  <Link href="/"><FacebookIcon /></Link>
                </ListItem>
                <ListItem>
                    <Link href="/"><InstagramIcon /></Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
    </StepWrapperHeaderStyled>
  );
}

export default StepWrapperHeader;
