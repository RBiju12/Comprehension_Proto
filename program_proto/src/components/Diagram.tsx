import {type CellStyle, Graph, InternalEvent} from '@maxgraph/core';
import {useRef, useEffect} from 'react';

export default function Diagram()
{
    const containerElement = useRef<any>(null) 
    const width = window.innerWidth;
    const height = window.innerHeight;

    useEffect(() => {
        if (!containerElement?.current)
        {
            return;
        }

        const domElement = containerElement?.current as HTMLElement;
        InternalEvent.disableContextMenu(domElement);
        const graph = new Graph(domElement);
        graph.setPanning(true);
        const parent = graph.getDefaultParent();
        try
        {
            graph.batchUpdate(() => {
            const vertex1 = graph.insertVertex({
                parent,
                position: [width / 2, height / 2 - (height / 3)],
                value: 'Root',
                size: [100, 100],
                style: {
                    fillColor: 'black',
                    shape: 'rectangle',
                    verticalAlign: 'middle',
                    verticalLabelPosition: 'middle',
                    strokeColor: 'white',
                    fontSize:14,
                    fontColor: 'white'
                },
        
            });
        
            const vertex2 = graph.insertVertex({
                parent,
                position: [(width / 2) - 200 , (height / 2) + 50],
                size: [100, 100],
                value: 'Child 1',
                style: {
                    fillColor: 'black',
                    shape: 'rectangle',
                    verticalAlign: 'middle',
                    verticalLabelPosition: 'middle',
                    strokeColor: 'white',
                    fontSize:14,
                    fontColor: 'white'
                },
            });
        
            const vertex3 = graph.insertVertex({
                parent,
                position: [(width / 2) + 200, (height / 2) + 50],
                size: [100, 100],
                value: 'Child 2',
                style: {
                    fillColor: 'black',
                    shape: 'rectangle',
                    verticalAlign: 'middle',
                    verticalLabelPosition: 'middle',
                    strokeColor: 'white',
                    fontSize:14,
                    fontColor: 'white'
                },
            });
        
            graph.insertEdge({
                parent,
                source: vertex1,
                target: vertex2,
                style: {
                    rounded: false,
                    edgeStyle: 'segmentEdgeStyle',
                    strokeColor: 'white'
                }
            });

            graph.insertEdge({
                parent,
                source: vertex1,
                target: vertex3,
                style: {
                    rounded: false,
                    edgeStyle: 'segmentEdgeStyle',
                    strokeColor: 'white'
                }
            })
            });
        
            

        }
        catch(e)
        {
            console.log("Error", e)
        }

        return () => {
            graph.destroy();
        }

    }, [])



    return (
        <>
        <div className='relative size 16'>
            <h1 className='text-white'>Subsystem / Component 6</h1>
        </div>
        <div ref={containerElement as any} className='justify-center items-center'/>
        </>
    )
}