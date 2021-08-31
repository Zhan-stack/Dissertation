import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.only('md')]: {
            display: 'flex'
        }
    },
    sectionMoile: {
        display: 'flex',
        [theme.breakpoints.only('md')]: {
            display: 'none'
        }
    }
}))