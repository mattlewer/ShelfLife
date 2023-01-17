import React from 'react';
import {View} from 'react-native';
import HomeStatCard from '../HomeStatCard';

interface HomeStatsProps {
    currentItems: number;
    discardedItems: number;
    moneyWasted: number
}
const HomeStats = (props: HomeStatsProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{height: 160, flex: 1}}>
        <HomeStatCard
          title={'Current items'}
          content={props.currentItems.toString()}
          type={'positive'}
        />
        <HomeStatCard
          title={'Items discarded'}
          content={props.discardedItems.toString()}
          type={'negative'}
        />
      </View>
      <HomeStatCard title={'Money wasted'} content={'£' + props.moneyWasted.toString()} type={'data'} />
    </View>
  );
};

export default HomeStats;
