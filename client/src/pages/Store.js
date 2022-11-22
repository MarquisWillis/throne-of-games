import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_GAMES } from '../utils/queries';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import '../styles/style.css';
import AddCartBtn from '../components/AddCartBtn';

 
export default function Store({ setCurrentPage, setCurrentGame }) {
  const { data, loading } = useQuery(QUERY_ALL_GAMES)
  console.log (data)
  const game = data?.allGames || [];
  console.log (game)
  
  if(loading) {
    return <h1 className='text-white'>LOADING...</h1>
  }

  return (
    <>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 content-center content-evenly'>
        {game.map((game) => {
          return (
            
            <Card className="w-96 mt-40 ml-40 bg-blue bg-opacity-60 text-grey cursor-pointer container"
              onClick={() => {
                setCurrentPage("SingleGame");
                setCurrentGame(game);
              }}>
              <CardHeader className="relative h-56">
                <img
                  src={game.image}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                <h1 class="text-sm-2 font-press-start underline">{game.title}</h1>
                </Typography>
                <Typography>
                  {game.summary}
                </Typography>
              </CardBody>
              <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small">${game.price}</Typography>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}