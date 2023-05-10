import React from 'react'
import * as icons from '../../objects'
import { IconComponent, iconTypes } from '../../'
import { IconProps } from '../../components/icon.component'



export const IconsList: React.FC<IconProps> = ({
    color,
    size
}) =>
    <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}> {
        Object.keys(icons).map((value, key) => {
            return <div key={key} style={{
                width: "200px",
                textAlign: "center",
                border: "1px solid white",
                borderRadius: "5px"
            }}>
                <span style={{
                    display: "block",
                    padding: "15px",
                    marginBottom: "5px",
                    borderBottom: "1px solid white"
                }}>{value}</span>
                <div style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "center"
                }} >
                    <IconComponent size={size} color={color}
                        refIcon={value as iconTypes} />
                </div>
                <p style={{
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: "16px",
                    paddingBottom: "10px",
                    paddingTop: "5px"
                }}>{`<IconComponent size={${size}} color="${color}" refIcon="${value}" />`}</p>
            </div>
        })
    }
    </div >