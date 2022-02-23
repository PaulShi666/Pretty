import React from 'react';

import './Pretty.css';

interface Props {
    data: string;
}

function Pretty({data}: Props) {
    const json = JSON.parse(data);
    return (
        <div className="pretty">
            <Inner data={json}/>
        </div>
    );
}

interface InnerProps {
    data: any;
    newLine?:boolean;
}

function Inner({data,newLine=true}: InnerProps) {
    if (typeof data === "string") {
        return newLine?<p>{data}</p>:<span>{data}</span>
    } else if (Array.isArray(data)) {
        return (
            <div>
                <div>[</div>
                <div className="item">
                    {data.map((item: any) => {
                        return <Inner key={item} data={item}/>
                    })}
                </div>
                <div>]</div>
            </div>)
    } else if (typeof data === "object") {
        return (
            <div>
                <div>{"{"}</div>
                <div className="item">
                    {Object.keys(data).map((key, index) => {
                        return (<div key={key}>{key}:<Inner data={data[key]} newLine={false}/></div>)
                    })}
                </div>
                <p>{"}"}</p>
            </div>)
    } else {
        return <div></div>
    }
}

export default Pretty;
