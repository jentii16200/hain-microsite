import { Box, Card, CardBody, Flex, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { VscGraphLine } from 'react-icons/vsc';
import { Area, AreaChart, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { MONTHS, YEAR } from '../../Order-Log/api/DateData';

export const RevenueCard = ({ posts }) => {

    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedYear, setSelectedYear] = useState();
    

    // let totalRevenue = 0;
    // posts?.map(post => {
    //     if (post.status == 'completed') {
    //         totalRevenue += parseInt(post.totalPrice);
    //     }
    // });
    

const chartData = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const day=i;
    const date = `${i}/${selectedMonth}/${selectedYear}`;
    // const date = `${i}/${currentMonth + 1}/${currentYear}`;
    const revenue = posts?.filter(item => item.currentDate === date && item.status === 'completed')
      .reduce((sum, item) => sum + parseInt(item.totalPrice), 0);
    let completedOrder = 0;
    posts?.map(item => 
        {if(item.currentDate === date && item.status === 'completed'){
        completedOrder++;}
    })
    let rejectedOrder = 0;
    posts?.map(item => 
        {if(item.currentDate === date && item.status === 'completed'){
        rejectedOrder++;}
    })
    chartData.push({ day, date, revenue, completedOrder, rejectedOrder });
  }
 
    let totalRevenue = 0;
  
    posts?.forEach(post => {
        if (post.currentDate && post.status === 'completed') {
          const [day, month, year] = post.currentDate.split('/');
          if (
            parseInt(month) == selectedMonth &&
            parseInt(year) == selectedYear
          ) {
            totalRevenue += parseInt(post.totalPrice);
          }
        }
      });
  
  



  const handleMonthChange = (event) => {
    const selectMonth = event.target.value;
    setSelectedMonth(selectMonth);
  };
  const handleYearChange = (event) => {
    const selectYear = event.target.value;
    setSelectedYear(selectYear);
  };
    return (
        <Card minHeight="100%" minWidth="50px">
            <CardBody >
                <Flex justifyContent='space-between'>
                    <Text fontSize='xl' fontFamily='monospace' fontWeight='bold' color='black'>
                        Revenue
                    </Text>
                    <Box flex={1} />
                    <Flex gap='5'>
                        <Box width="150px"
                        >
                              <Select placeholder="Select a month" onChange={handleMonthChange} defaultValue={selectedMonth}>
                                {MONTHS.map((month) => (
                                  <option key={month.value} value={month.value}>
                                    {month.label}
                                  </option>
                                ))}
                              </Select>
                            </Box>
                            <Box width="100px">
                              <Select placeholder="Select a year" onChange={handleYearChange} defaultValue={selectedYear}>
                                {YEAR.map((year) => (
                                  <option key={year.value} value={year.value}>
                                    {year.label}
                                  </option>
                                ))}
                              </Select>
                            </Box>
                    </Flex>
                </Flex>
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
                                <Tooltip
                                labelFormatter={(label) => `Day: ${label}`} />
                                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    );
};
