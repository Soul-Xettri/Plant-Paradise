import {
  createStyles,
  Header,
  Group,
  Button,
 
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 300,
    fontSize: "20px",
    lineHeight:"20px",

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));



export function TopHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  

  return (
    <Box pb={120} style={{marginRight:"40px",marginLeft:"40px"}}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <img src='../src/assets/images/logo.png'/>

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
           
            <Link to="/store" className={classes.link}>
              Store
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
          <Link to='/auth'>
            <Button variant="default">Log in</Button>
            </Link>
            <Link to='/auth'>
            <Button >Sign up</Button>
            </Link>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/store" className={classes.link}>
            Store
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Link to='/auth'>
            <Button variant="default">Log in</Button>
            <Button >Sign up</Button>
            </Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}