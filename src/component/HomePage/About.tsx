import {
  createStyles,
  Container,
  Title,
  Text,
  rem,
  Button,
  em,
  Image,
  SimpleGrid,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    // backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundImage:
    //   theme.colorScheme === "dark"
    //     ? "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)"
    //     : "linear-gradient(180deg, rgba(255,255,255,0.01) 0%, #1d293e 100%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    width: "100%",
    objectFit: "cover",
    transition: "transform 500ms ease",
    "&:hover": {
      transform: "scale(1.1,1.1)",
    },
  },

  content: {
    // paddingTop: `calc(${theme.spacing.xl} * 2)`,
    // paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    // marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : "#002247",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: "black",
    lineHeight: "30px",
    opacity: 0.75,
    maxWidth: rem(700),
    fontSize: "16px",
    marginTop: "25px",
    marginBottom: "23px",
    fontWeight: 300,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
  search: {
    backgroundPosition: "center",
  },
  // imageTop: {
  //   position: "relative",
  //   width: "100%",
  //   paddingRight: "15px",
  //   paddingLeft: "15px",
  //   [`@media  (max-width: ${em(992)})`]: {
  //     height: rem(401.6),
  //     width: rem(300),
  //   },
  // },
  aboutImage: {
    position: "relative",

    [`@media (max-width: ${em(575)}) and (min-width: ${em(320)})`]: {
      minHeight: "initial",
    },
    [`@media  (min-width: ${em(768)}) and (max-width: ${em(948)}) `]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  aboutImageTop: {
    position: "absolute",
    width: "50%",
    left: 0,
    bottom: "10%",
    [`@media (max-width: ${em(575)}) and (min-width: ${em(320)})`]: {
      position: "relative",
      width: "100%",
      bottom: "0",
      marginBottom: "15px",
      transform: "translateY(0)",
      border: 0,
    },
    zIndex: 1,
    [`@media  (min-width: ${em(768)}) and (max-width: ${em(948)}) `]: {
      width: "75%",
      bottom: "0%",
      left: "auto",
    },
  },
  aboutImageBottom: {
    position: "relative",
    width: "80%",
    right: "-20%",
    [`@media (max-width: ${em(575)}) and (min-width: ${em(320)})`]: {
      position: "relative",
      width: "100%",
      right: "0%",
    },
    [`@media  (min-width: ${em(768)}) and (max-width: ${em(948)}) `]: {
      width: "75%",
      right: "0%",
    },
  },
  hoverCard: {
    background: "#ffc31d",
    overflow: "hidden",
    position: "relative",
    display: "inline-block",
  },
}));

export function About() {
  const { classes } = useStyles();

  return (
    <div
      className={classes.root}
      // style={{
      //   backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)`,
      // }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <SimpleGrid
              cols={2}
              spacing="0"
              verticalSpacing="50px"
              breakpoints={[
                {
                  maxWidth: "70rem",
                  cols: 2,
                  spacing: "60px",
                  verticalSpacing: "60px",
                },
                { maxWidth: "48rem", cols: 1, spacing: "50px" },
                { maxWidth: "36rem", cols: 1, spacing: "sm" },
              ]}
              style={{
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Title
                  order={1}
                  sx={(theme) => ({
                    color:
                      theme.colorScheme === "dark" ? theme.white : "#002247",

                    fontWeight: 300,
                    [theme.fn.smallerThan("md")]: {
                      maxWidth: "100%",
                      fontSize: "40px",
                      lineHeight: "55px",
                    },
                  })}
                >
                  The most important things are not things so we’ll design
                  experiences.
                </Title>

                <Text className={classes.description} >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam ipsam ullam incidunt itaque nemo omnis temporibus
                  totam quibusdam repellat vero, recusandae excepturi
                  dignissimos velit et alias amet, quia facilis perferendis.
                </Text>
                <Button
                  className="plantButton"
                  style={{ animationDelay: "1.4s", width: "40%" }}
                >
                  Buy Now
                </Button>
              </div>

              <div className={classes.aboutImage}>
                <Image
                  src="../src/assets/images/1.png"
                  className={classes.image}
                />
              </div>
            </SimpleGrid>
          </div>
        </div>
      </Container>
    </div>
  );
}
