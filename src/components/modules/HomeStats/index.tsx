import React from 'react';
import {View} from 'react-native';
import HomeStatCard from '../HomeStatCard';
import {localise} from '../../../services/lang/lang';

interface HomeStatsProps {
  currentItems: number;
  discardedItems: number;
  moneyWasted: number;
}
const HomeStats = (props: HomeStatsProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{height: 150, flex: 1}}>
        <HomeStatCard
          title={localise('CURRENT_ITEMS')}
          content={props.currentItems.toString()}
          type={'positive'}
        />
        <HomeStatCard
          title={localise('ITEMS_DISCARDED')}
          content={props.discardedItems.toString()}
          type={'negative'}
        />
      </View>
      <HomeStatCard
        title={localise('MONEY_WASTED')}
        content={'£' + props.moneyWasted.toString()}
        type={'data'}
      />
    </View>
  );
};

export default HomeStats;
