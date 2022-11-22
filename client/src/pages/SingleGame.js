import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import React from 'react';


import AddCartBtn from '../components/AddCartBtn';

export default function SingleGame(gameData) {
  const game = gameData.currentGame;
  return (
    <>
    {console.log(game)}
      <img className="mx-auto h-1/2 w-1/2 mt-20"
        src={game.image}
        alt=""
      />

      <div className="flex flex-wrap justify-center">
        <div className='card'>
          <Card className="bg-blue bg-opacity-60 text-grey mr-44">
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                <h1 class="text-sm-2 font-press-start underline">About</h1>
              </Typography>
              <Typography>
                {game.title} <br />
                {game.description}
              </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Typography variant="small">${game.price}
              </Typography>
              <Typography variant="small" color="grey" className="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <AddCartBtn game={game}/>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}