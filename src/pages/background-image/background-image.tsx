import { useSpring, animated } from 'react-spring'
// import {Parallax, ParallaxLayer } from 'react-spring/parallax'

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
        <div style={{zIndex: "-1", position: "absolute"}}>
            <animated.div style={animation}>
                {/* <h1>HELLO WORLD LOLOLOLO sdf dfdddddddddddddddddddddddddddddddddd</h1> */}
            </animated.div>
        </div>
        
    )
}

export default BackgroundImage;