export default async function yoOptionOrPromt(prompts) {
  if (!Array.isArray(prompts)) prompts = [prompts];
  const filteredPrompts = [];
  const props = new Map();
  prompts.forEach(prompt => {
    const option = this.options[prompt.name];
    if (option === undefined) {
      filteredPrompts.push(prompt);
    } else {
      props[prompt.name] = normalize(option);
    }
  });
  if (filteredPrompts.length) {
    const mergeProps = await this.prompt(filteredPrompts);
    Object.assign(props, mergeProps);
  }
  return props;
}

function normalize(option) {
  if (typeof option === 'boolean') {
    return option;
  }
  if (typeof option === 'string') {
    const lc = option.toLowerCase();
    if (lc === 'true' || lc === 'false') {
      return lc === 'true';
    }
  }
  return option;
}
