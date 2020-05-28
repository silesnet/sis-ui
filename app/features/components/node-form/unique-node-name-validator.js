export default function validateUniqueness() {
  return (key, newValue, oldValue, changes, content) => {
    if (typeof changes.name === 'undefined') {
      return true;
    }
    return content.store.query('node-item', { name: newValue }).then(
      (items) => (items.toArray().length ? 'name already taken' : true),
      () => true,
    );
  };
}
