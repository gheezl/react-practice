import { useSpring, animated } from 'react-spring'

const BackgroundImage = ({children}: any) => {
    const animation = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        }
    })

    return (
        <animated.div style={animation}>
            <h1>HELLO WORLD LOLOLOLO</h1>
        </animated.div>
    )
}

export default BackgroundImage;