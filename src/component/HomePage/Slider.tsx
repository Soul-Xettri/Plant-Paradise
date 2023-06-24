import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, createStyles, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(500),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    color: "#80b435",
    lineHeight: 1.2,
    fontSize: "60px",
    marginTop: theme.spacing.xs,
  },

  category: {
    color: "#2b2b2b",
    opacity: 0.7,
    fontWeight: 400,
    fontSize:"16px",
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}
function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="0"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div style={{width:"500px"}}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button  className="plantButton"style={{animationDelay:"1.4s"}}>
        Buy Now
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
    "../src/assets/images/slider_h5_01.jpg",
    title: 'Plant Paradise Plants1',
    category: 'House Plant, Office Plant',
  },
  
  {
    image:
    "../src/assets/images/slider_h5_02.jpg",
    title: 'Plant Paradise Plants2',
    category: 'House Plant, Office Plant',
  },
  {
    image:
    "../src/assets/images/slider_h5_03.jpg",
    title: 'Plant Paradise Plants3',

    category: 'House Plant, Office Plant',
  },
];
export default function Slider() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xl})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel maw={320} mx="auto" withIndicators slidesToScroll={mobile ? 1 : 1}
 styles={{
      control: {
        '&[data-inactive]': {
          opacity: 0,
          cursor: 'default',
        },
      },
    }}>
      {slides}
    </Carousel>
  );
}
