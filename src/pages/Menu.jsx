import {Typography, Container, Box} from '@mui/material';
import food1 from '../assets/food1.jpg'
import food2 from '../assets/food2.jpg'
import food3 from '../assets/food3.jpg'
import food4 from '../assets/food4.jpg'
import food5 from '../assets/food5.jpg'
import food6 from '../assets/food6.jpg'
import food7 from '../assets/food7.jpg'
import food8 from '../assets/food8.jpg'

export const Menu = () => {
  const dishes = [
    {
      name: 'Spaghetti Carbonara',
      description: 'Creamy pasta with pancetta, egg yolk, and parmesan cheese.',
      image: food1,
      price: 14.99,
    },
    {
      name: 'Margherita Pizza',
      description: 'Thin crust pizza topped with tomato sauce, mozzarella, and basil.',
      image: food2,
      price: 12.5,
    },
    {
      name: 'Grilled Salmon',
      description: 'Fresh salmon fillet served with lemon butter sauce and vegetables.',
      image: food3,
      price: 18.75,
    },
    {
      name: 'Beef Burger Deluxe',
      description: 'Juicy grilled beef patty with cheddar, lettuce, and house sauce.',
      image: food4,
      price: 13.25,
    },
    {
      name: 'Chicken Tikka Masala',
      description: 'Tender chicken pieces simmered in a creamy spiced tomato sauce.',
      image: food5,
      price: 15.0,
    },
    {
      name: 'Sushi Platter',
      description: 'Assorted fresh nigiri and rolls served with soy sauce and wasabi.',
      image: food6,
      price: 22.5,
    },
    {
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.',
      image: food7,
      price: 9.75,
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a gooey molten center and vanilla ice cream.',
      image: food8,
      price: 8.5,
    },
  ]
  return (
    <Box
      display='flex'
      p='1rem'
      flexWrap='wrap'
      gap='1rem'
      justifyContent='center'>
      {dishes.map((dish) => (
        <Box
          key={dish.name}
          textAlign="center"
          sx={{
            flex: "1 1 24rem",
            maxWidth: "24rem",
            backgroundColor: "background.paper",
            borderRadius: "0.3rem",
            p: "1rem",
            transition: "transform 0.3s, box-shadow 0.3s", // smooth animation
            "&:hover": {
              transform: "translateY(-0.5rem) scale(1.05)", // lift and slightly bigger
              boxShadow: 6,
            }
          }}>
          <img
            src={dish.image}
            alt={dish.name}
            style={{width: '100%', borderRadius: '0.3rem'}}/>
          <Typography variant="h6">{dish.name}</Typography>
          <Typography variant="body2"
                      sx={{
                        width: '100%',
                        maxWidth: '24rem'
                      }}
          >
            {dish.description}</Typography>
          <Typography variant="subtitle1">${dish.price.toFixed(2)}</Typography>
        </Box>
      ))}
    </Box>
  )
}