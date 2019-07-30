export default (tickets) => {
  const { ids, entities } = tickets;

  return ids.sort((id1, id2) => {
    const entity1 = entities[id1];
    const entity2 = entities[id2];
    return entity1.price - entity2.price;
  });
}