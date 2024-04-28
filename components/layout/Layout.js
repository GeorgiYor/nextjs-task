import { Vidd } from "../video/elements";
import { StyledBlock1, StyledBlock2, StyledBlock3, StyledSmallBlock1, StyledSmallBlock2 } from "../blocks/elements";
import { BlocksLayout } from "../blockLayout/elements";
import { Header } from "../header/elements";
import Image from 'next/image'
import { FlDiv } from "../fldiv/elements";
import { Content } from "../content/elements";
import {Ptag, H1tag, H3tag, PtagBold, Itag} from "../tags/elements"


const Info = {
    h1: "Managed agency selection",
    pHead: "Strengthen your onboarding process",
    icon: "icon",
}


const Layout = ({}) => {
    return ( 
        
        <Content >
       
            <Header>
                <H1tag>{Info.h1}</H1tag>
                <Ptag>{Info.pHead}</Ptag>
            </Header>
            <FlDiv style={{
            backgroundImage: `url(${"img/background.png"})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
            }}>
                <div style={{height: "400px"}}>
                    <Image
                        src={'/img/video.png'}
                        width={250}
                        height={400}
                        alt="Picture of the author"
                    />
                </div>
                <BlocksLayout>
                    <StyledBlock1>
                        <StyledSmallBlock1>
                            <Itag>
                                <Image
                                    src={'/img/pic1.png'}
                                    width={75}
                                    height={65}
                                    alt="icon1"
                                />  
                            </Itag>
                        </StyledSmallBlock1>
                        <StyledSmallBlock2>
                            <H3tag>Brief</H3tag>
                            <Ptag>Complete <b>brief writing or simple guidance</b> on what to include, we`ve got you covered.</Ptag>
                        </StyledSmallBlock2>
                    </StyledBlock1>
                    <StyledBlock2>
                    <StyledSmallBlock1>
                        <Itag>
                            <Image
                                src={'/img/pic2.png'}
                                width={75}
                                height={65}
                                alt="icon2"
                            />      
                        </Itag>
                        </StyledSmallBlock1>
                        <StyledSmallBlock2>
                            <H3tag>Search</H3tag>
                            <Ptag>In-depth agency search covering; <b>criteria matching,</b> door knocking and due-dilligence vetting.</Ptag>
                        </StyledSmallBlock2>
                    </StyledBlock2>
                    <StyledBlock3>
                    <StyledSmallBlock1>
                        <Itag>
                            <Image
                                src={'/img/pic3.png'}
                                width={75}
                                height={65}
                                alt="icon3"
                            />      
                        </Itag>
                        </StyledSmallBlock1>
                        <StyledSmallBlock2>
                            <H3tag>Pitch</H3tag>
                            <Ptag>Comprehensive <b>pitch management,</b> including comms, diary management and pitch hosting.</Ptag>
                        </StyledSmallBlock2>
                    </StyledBlock3>
                </BlocksLayout>
            </FlDiv>
            
        </Content>
     );
}
 
export default Layout;