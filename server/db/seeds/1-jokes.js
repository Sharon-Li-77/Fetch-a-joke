export async function seed(knex) {
  await knex('jokes').insert([
    {
      id: 1,
      joke: `I'm tired of following my dreams.`,
      punchLine: `I'm just going to ask them where they are going and meet up with them later.`,
    },
    {
      id: 2,
      joke: `Did you hear about the guy whose whole left side was cut off?`,
      punchLine: `He's all right now.`,
    },
    {
      id: 3,
      joke: `Why didn’t the skeleton cross the road?`,
      punchLine: `Because he had no guts.`,
    },
    {
      id: 4,
      joke: `What did one nut say as he chased another nut?`,
      punchLine: `I'm a cashew!`,
    },
    {
      id: 5,
      joke: `Where do fish keep their money?`,
      punchLine: `In the riverbank`,
    },
    {
      id: 6,
      joke: `How do celebrities stay cool?`,
      punchLine: `They have many fans.`,
    },
    {
      id: 7,
      joke: `What do you call a fake noodle?`,
      punchLine: `An impasta.`,
    },
    {
      id: 8,
      joke: `How do you organize a space party?`,
      punchLine: `You planet.`,
    },
    {
      id: 9,
      joke: `Wanna hear a joke about paper?`,
      punchLine: `Never mind—it's tearable.`,
    },
    {
      id: 10,
      joke: `Every time I take my dog to the park, the ducks try to bite him.`,
      punchLine: `That's what I get for buying a pure bread dog.`,
    },
    {
      id: 11,
      joke: `How do you make a Kleenex dance?`,
      punchLine: `Put a little boogie in it!`,
    },
  ])
}
