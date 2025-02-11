import {type CellStyle, Graph, InternalEvent} from '@maxgraph/core';
import {useRef, useEffect} from 'react';

export default function Dependencies()
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
                position: [(width / 2) - width / 3 - 300 , (height / 2) - height / 2 + 100],
                id: 'comp1',
                value: 'Component 1',
                size: [100, 40],
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
                position: [(width / 2) - width / 3 - 300 , (height / 2) - height / 2 + 200],
                id: 'comp2',
                size: [100, 40],
                value: 'Component 2',
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
                position: [(width / 2) - width / 3 - 150 , (height / 2) - height / 2 + 100],
                id: 'comp3',
                size: [100, 40],
                value: 'Component 3',
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

            const vertex4 = graph.insertVertex({
                parent,
                position: [(width / 2) - width / 3 - 150, (height / 2) - height / 2 + 200],
                id: 'comp4',
                size: [100, 40],
                value: 'Component 4',
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
                target: vertex3,
                style: {
                    rounded: false,
                    edgeStyle: 'manhattanEdgeStyle',
                    strokeColor: 'white'
                }
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
                source: vertex2,
                target: vertex3,
                style: {
                    rounded: false,
                    edgeStyle: 'manhattanEdgeStyle',
                    strokeColor: 'white'
                }
            });

            graph.insertEdge({
                parent,
                source: vertex3,
                target: vertex4,
                style: {
                    rounded: false,
                    edgeStyle: 'segmentEdgeStyle',
                    strokeColor: 'white'
                }
            });
            
            }
        )}
        catch(e)
        {
            console.log(e)
        }

        return () => graph.destroy()
        }, []);
        
    return (
        <div className='absolute top-0 left-0 mr-0'>
            <div className='bg-grey border-white' ref={containerElement as any} />
        </div>
    )
}