import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { VscGraphLine } from 'react-icons/vsc';
import { Area, AreaChart, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export const RevenueCard = ({ posts }) => {
    let totalRevenue = 0;
    posts?.map(post => {
        if (post.status == 'completed') {
            totalRevenue += parseInt(post.totalPrice);
        }
    });

    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        },
        {
            name: "Page H",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];

    return (
        <Card minHeight="100%" minWidth="50px">
            <CardBody >
                <Text fontSize='xl' fontFamily='monospace' fontWeight='bold' color='black'>
                    Revenue
                </Text>
                <Flex>
                    <Flex flexDirection='column'
                        marginTop='10'
                        marginLeft='5'>
                        <Text fontSize='xl' fontFamily='sans-serif' fontWeight='bold' color='black'>
                            {totalRevenue}
                        </Text>
                        <Text fontSize='sm' fontFamily='monospace' fontWeight='bold' color='gray.400'>
                            Total Revenue
                        </Text>
                    </Flex>
                    <Box width='100%' minHeight='100%'>
                        <ResponsiveContainer width="100%" minHeight="200px" >
                            <AreaChart data={data}
                                // width={630} height={250}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
};
