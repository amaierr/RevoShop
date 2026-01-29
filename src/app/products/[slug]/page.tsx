"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

function DetailPage() {
    const params = useParams<{ slug: string }>();
    
    useEffect(() => {
        console.log(params.slug)
    }, [])
    return <>
        <h1>{params.slug}</h1>
        <h1>detill</h1>
    </>
}

export default DetailPage