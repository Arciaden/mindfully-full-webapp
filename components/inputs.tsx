import { Input } from '@chakra-ui/react'
import { FC } from 'react'

export const InputText: FC< {
    type: 'text' | 'textArea' | 'number' | 'email' | 'tel'
    backgroundColor: string
    borderWidth: string
    borderStyle: string
    borderColor: string
    borderRadius: number
}> = ({ type, backgroundColor, borderWidth, borderStyle, borderColor, borderRadius}) => {
    return (
        <Input 
        type={type}
        backgroundColor={['#fff', '#fff', 'transparent' ]}
        borderWidth= {borderWidth}
        borderStyle= {borderStyle}
        borderColor={borderColor}
        borderRadius={borderRadius}
        />
    )
}