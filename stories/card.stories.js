import React from 'react'
import Flexbox from 'flexbox-react'
import { storiesOf } from '@kadira/storybook'
import MicroCard from '../src/components/MicroCard/MicroCard'
import LargeCard from '../src/components/LargeCard/LargeCard'
import FavoriteButton from '../src/components/FavoriteButton'
import Accordian from '../src/components/accordian/Accordian'
import StopStartButton from '../src/components/StopStartButton'
import { Icon } from 'semantic-ui-react'

const card = {
  id: 0,
  isFavorited: true,
  title: 'test'
}

const largeCardContent = {
  id: 1
}

const alertIconUri = require('../src/assets/alert-icon.svg')

function handleMe () {
  console.log('Handle the click action')
}
const items = [
  {
    id: 0,
    state: 'normal',
    name: 'text',
    status: 'OPERATION COMPLETED',
    date: '9/12/2016'
  }
]
const drawer = <Accordian.Drawer expandGroupToggle={handleMe}>test</Accordian.Drawer>
storiesOf('Cards', module)
  .add('Micro Card', () => (
    <div>
      <Icon name='users' />
      <MicroCard cardContent={card} style={{marginRight: '10px'}} onClick={handleMe} >
        <MicroCard.Gutter color='critical' />
        <MicroCard.Content cardContent={card} />
        <MicroCard.Favorite isFavorited={card.isFavorited} />
        <MicroCard.Count value={27} />
        <MicroCard.Action onClick={handleMe} />
      </MicroCard>

      <MicroCard cardContent={card} style={{marginRight: '10px'}} onClick={handleMe} >
        <MicroCard.Gutter color='blue' />
        <MicroCard.Content cardContent={card}>
          <Flexbox marginRight='5px'>
            <img className='microcard__stateIcon' src={alertIconUri} alt='icon' />
          </Flexbox>
          <Flexbox flexDirection='column' justifyContent='center' className='microcard__message'>
            <h4>connection error</h4>
            <h3>DATABASE</h3>
          </Flexbox>
        </MicroCard.Content>
        <MicroCard.Favorite isFavorited={card.isFavorited} />
        <MicroCard.Count value={27} />
        <MicroCard.Action onClick={handleMe} />
      </MicroCard>

    </div>
  ))
  .add('Large Card', () => (
    <div>
      <LargeCard cardContent={largeCardContent} showCard>
        <LargeCard.Gutter color='critical' />
        <LargeCard.Content style={{height: '200px'}}>
          <Flexbox flexDirection='row' flexGrow={1} className={'large_card__heading'}>
            <Flexbox flexGrow={1} className='title textGray'>Title</Flexbox>
            <FavoriteButton className='large_card__favorite' isFavorited />
          </Flexbox>
          <Flexbox flexDirection='column' flexGrow={3}>
            <Flexbox flexDirection='row'>
              <LargeCard.KeyValue name='item' value={29} />
              <LargeCard.KeyValue name='item' value={29} />
              <LargeCard.KeyValue name='item' value={29} />
            </Flexbox>
            <LargeCard.RecentList items={items} />
          </Flexbox>
        </LargeCard.Content>
        <LargeCard.Close onClick={handleMe} />
        <LargeCard.Action label='test' onClick={handleMe} />
      </LargeCard>

    </div>
  ))
  .add('Accordian', () => (
    <div>
      <Accordian data={{id: 0}} folder drawer={drawer}>
        <Accordian.PrimaryAction><StopStartButton /></Accordian.PrimaryAction>
        <Accordian.Title>I'm ready to go!</Accordian.Title>
        <Accordian.ActionButon>MANAGE</Accordian.ActionButon>
        <Accordian.Widget borderLeft>
          <Accordian.Widget.Label style={{marginRight: '30px'}}>
            LABEL
          </Accordian.Widget.Label>
          <Accordian.Widget.Value>
            1234
          </Accordian.Widget.Value>
        </Accordian.Widget>
        <Accordian.Widget borderLeft>
          <Accordian.Widget.Label style={{marginRight: '30px'}}>
            FOO
          </Accordian.Widget.Label>
          <Accordian.Widget.Value>
            BAR
          </Accordian.Widget.Value>
        </Accordian.Widget>
      </Accordian>
      <Accordian data={{id: 0}} folder={false}>
        <Accordian.PrimaryAction><StopStartButton isStopped /></Accordian.PrimaryAction>
        <Accordian.Title>I'm stopped</Accordian.Title>
      </Accordian>
    </div>
  ))
