/**
 * After searching a bit this is my understanding between class and functional components.
 * Pros of using functional component is:
 *  - Less Code, thus easy to read and test
 *  - In future it might have performance boost in some cases.
 *  - Plus, react devs seem to be more focused on functional.
 * 
 * Functional components were considered as stateless components, because it did not setState.
 * But after 16.8 Hooks update, the functional components now can use useEffect to get and set states.
 * 
 * More info: https://reactjs.org/docs/hooks-effect.html
 * 
 * 
 * Using this example: https://codesandbox.io/s/github/konvajs/site/tree/master/react-demos/drop_image_into_stage?from-embed=&file=/src/index.js:1134-1174
 */
import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

const GetElement = ({ rect, id }) => {
    return (<Rect
        key={id}
        x={rect.x}
        y={rect.y}
        width={100}
        height={100}
        fill="red"
        shadowBlur={10}
        draggable = {true}
    />)
}

const Board = () => {
    const dragElement = React.useRef(); //Not sure what this is .useRef()
    const stageRef = React.useRef();
    const [elements, setElements] = React.useState([]);

    return (
        <div>
            <div
                draggable="true"
                onDragStart={(e) => {
                    dragElement.current = e.target;
                }}>Test</div>

            <div
                onDrop={(e) => {
                    e.preventDefault();
                    stageRef.current.setPointersPositions(e);
                    console.log(stageRef.current.getPointerPosition())
                    setElements(
                        elements.concat([
                            stageRef.current.getPointerPosition(),
                        ])
                    )
                }}
                onDragOver={(e) => e.preventDefault()}>

                <Stage className="board" width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
                    <Layer>
                        {elements.map((elem, index) => {
                            return <GetElement key={index} rect = {elem} ></GetElement>
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    );
}

export default Board;


//SHEESH, It is late right now 2:00. But I will document what I did tomorrow.