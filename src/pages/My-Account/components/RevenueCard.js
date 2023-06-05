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
    // const data = [
    //     {
    //         name: "Page A",
    //         pv: 2400,
    //         amt: 2400
    //     },
    //     {
    //         name: "Page B",
    //         pv: 1398,
    //         amt: 2210
    //     },
    //     {
    //         name: "Page C",
    //         pv: 9800,
    //         amt: 2290
    //     },
    //     {
    //         name: "Page D",
    //         pv: 3908,
    //         amt: 2000
    //     },
    //     {
    //         name: "Page E",
    //         pv: 4800,
    //         amt: 2181
    //     },
    //     {
    //         name: "Page F",
    //         pv: 3800,
    //         amt: 2500
    //     },
    //     {
    //         name: "Page G",
    //         pv: 4300,
    //         amt: 2100
    //     },
    //     {
    //         name: "Page H",
    //         pv: 4300,
    //         amt: 2100
    //     }
    // ];

    // const chartData = [];
    // posts?.forEach(item => {
    //   const date = item.currentDate?.split('/')[1];
    //   const amount = parseInt(item.totalPrice);
  
    //   const existingData = chartData.find(d => d.date === date);
    //   if (existingData) {
    //     existingData.revenue += amount;
    //   } else {
    //     chartData.push({ date, revenue: amount });
    //   }
    // });

    const chartData = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const day=i;
    const date = `${i}/${currentMonth + 1}/${currentYear}`;
    const revenue = posts?.filter(item => item.currentDate === date && item.status === 'completed')
      .reduce((sum, item) => sum + parseInt(item.totalPrice), 0);
    chartData.push({ day,date, revenue });
  }
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
                            <AreaChart data={chartData}
                                // width={630} height={250}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey='day' />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
};
