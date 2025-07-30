import React from "react";


export default function ({ children }: { children: React.ReactNode }) {
    return <div>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
    </div>
}