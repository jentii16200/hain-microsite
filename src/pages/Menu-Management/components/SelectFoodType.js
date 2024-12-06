import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
const SelectFoodType = () => {
    const buttonInfo = [
        {
            id: '1',
            name: 'Pulutan'
        },
        {
            id: '2',
            name: 'dish'
        },
        {
            id: '3',
            name: 'Inum'
        }
    ];

    const handleChange = (e) => {
        setMenuName(e.target.value);
    };
    const [menuName, setMenuName] = useState(buttonInfo[0].name);
    return (
        <Select
            fontSize='2xl'
            icon='none'
            size='lg'
            variant='flushed'
            marginBottom='1rem'
            maxWidth='10rem'
            value={menuName}
            onChange={handleChange}
        >
            {buttonInfo.map(v =>
                <option
                    key={v.id}
                    value={v.name}

                >{v.name}
                </option>
            )}
        </Select>
    );
};

export default SelectFoodType;