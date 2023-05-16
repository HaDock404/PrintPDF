import React, {useRef} from "react";
import {useReactToPrint} from 'react-to-print'

function ReactPdfPrint() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: ()=> alert('Print success')
    })
    return (
        <>
            <div ref={componentRef}>
                <h1>Employee data</h1>
            </div>
            <button onClick={handlePrint}>Print this out</button>
        </>
    )
}

export default ReactPdfPrint