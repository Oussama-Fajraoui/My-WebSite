import React from 'react'
import { motion } from "framer-motion";
import CardContent from "@mui/material/CardContent";
import {
  AppBar,
  Grid,
  Box,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import web from "../services/web.svg"





function About() {
  const pageInfo = [
    {
      profilePic:"https://cdn.sanity.io/images/10ba2g2h/production/6614f8ae6565e8b2b930633ab7cb76e48fd4793a-1623x1080.jpg?rect=356,46,990,1034&w=2000&fit=max&auto=format",
      backgroundInformation:"I am a software Developer specialiazing in designing, building, and maintaining the server-side of web applications. I am passionate about building excellent software that improves the lives of those around me."
    }
  ]
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7x1 px-20 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2x1'>
        About
    </h3>
    {pageInfo.map((info) => (

      <motion.img 
      initial={{
        x:-200,
        opacity: 0
      }}
      transition={{
        duration: 1.2
    }}
    whileInView={{
        x:0,
        opacity: 1
      }}
      viewport={{once:true}}
      src={info.profilePic}
      className='-mb-16 md:mb-0 flex-shrink-0 w-45 h-45 rounded-full object-cover md:rounded-lg md:w-50 md:h-50 xl:w-[500px] xl:h-[500px]'
      />
      ))}
    <div className='space-y-7 px-0 md:px-10'>
        <h4 className='text-4x1 font-semibold'>
            Here is a{" "} 
        <span className='underline decoration-[#F7AB0A]'>Little</span>{" "} 
        background :
        </h4>
        {pageInfo.map((info) => (

          <p className='text-base'>
            {info.backgroundInformation}
        </p>
          ))}
    </div>
          <div></div>
          {/* <Grid item xs={2} sm={4} md={4} key={1}>
              <CardContent>
              </CardContent>
          </Grid> */}
          {/* <Grid item xs={2} sm={4} md={4} key={1}>
            <Card
              className="MuiCard-root"
              sx={{
                maxWidth: 345,
                padding: "5%",
                backgroundColor: "rgb(53, 53, 53)",
                color: "white",
                boxShadow: "5px 5px rgb(255, 86, 120)",
              }}
            >
              <CardMedia
                component="img"
                height="350"
                image={web}
                alt="Web developement"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="code">Web developement</span>
                </Typography>
                <Typography variant="body2">
                  <p className="code">
                    Javascript, NodeJs, ReactJs, Php, Laravel, Symfony, Html,
                    Css, Tailwind Css, SpringBoot, JavaEE, JSF, Angular
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid> */}

    </motion.div>
  )
}

export default About