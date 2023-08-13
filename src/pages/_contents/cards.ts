import { CollectionEntry, getCollection, getEntryBySlug } from 'astro:content';
import _ from 'lodash';

const getCards = await (async function(){
  const cards = await getCollection('cards');

  return function(){
    return _.cloneDeep(cards);
  }
})()


// 获取相关卡片
export async function getRelatedCards(card: CollectionEntry<'cards'>){
  if(!card.data.related) return [];
  let related = Array.isArray(card.data.related) ? card.data.related : [card.data.related];

  const related_cards = [];
  
  for(let i = 0; i < related.length; i++){
    const e = related[i]
    const entry = await getEntryBySlug(e.collection, e.slug);
    related_cards.push({
      ...entry.data,
      slug: entry.slug
    })
  }

  return related_cards
}