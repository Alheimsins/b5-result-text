module.exports = {
  domain: 'A',
//  title: 'Agreeableness',
  title: 'Convivialité',
//  shortDescription: 'Agreeableness reflects individual differences in concern with cooperation and social harmony. Agreeable individuals value getting along with others.',
  shortDescription: 'La convivialité, évalue l\'esprit d\'équipe, les interactions sociales et la capacité à bien s\'entendre avec les autres',
//  description: `They are therefore considerate, friendly, generous, helpful, and willing to compromise their interests with others'. Agreeable people also have an optimistic view of human nature. They believe people are basically honest, decent, and trustworthy.
//  <br /><br />
//  Disagreeable individuals place self-interest above getting along with others.  They are generally unconcerned with others' well-being, and therefore are unlikely to extend themselves for other people. Sometimes their skepticism about others' motives causes them to be suspicious, unfriendly, and uncooperative.
//  <br /><br />
//  Agreeableness is obviously advantageous for attaining and maintaining popularity. Agreeable people are better liked than disagreeable people. On the other hand, agreeableness is not useful in situations that require tough or absolute objective decisions. Disagreeable people can make excellent scientists, critics, or soldiers.`,
  description: `Les personnes conviviale se considére comme amical, généreuse, serviable et sont plus encline au compromis, ils ont également une vision optimiset du genre humain. Ils croit a l\'honneteté, la décence et la confiance des autres.
  <br /><br />
  Les moins conviviaux place leur intérêt au dessus de celui des autres. Ils se sentent moins concerné part le bien-etre d\'autrui et donc à les aider. Ils sont souvent sceptique sur les motivations des autres, voir supicieux, froid et peu cooperatif.
  <br /><br />
  Etre conviviale est evidement un avantage, pour atteindre et maintenir un popularité. Les individus conviviaux sont plus appréciés. D\'un autre coté, c\'est un désavantage dans des situations nécessitant une certaine objectivité. Les individus avec un score bas font d\'excellent scientifique, critique ou soldat.`,
  results: [
    {
      score: 'low', // do not translate this line
//      text: `Your score on Agreeableness is low, indicating less concern with others' needs than with your own. People see you as tough, critical, and uncompromising.`
      text: `Votre score est bas, cela indique que vous vous sentez moins concerné par les autres que par vous même. Votre entourage dit de vous que vous êtes dur, critique et n'êtes pas enclin au compromis.`
    },
    {
      score: 'neutral', // do not translate this line
//      text: `Your level of Agreeableness is average, indicating some concern with others' Needs, but, generally, unwillingness to sacrifice yourself for others.`
      text: 'Votre score est dans la moyenne, cela indique que vous vous sentez concerné par les autres mais que vous avez des reticences a vous sacrifiez pour eux.'
    },
    {
      score: 'high', // do not translate this line
//      text: `Your high level of Agreeableness indicates a strong interest in others' needs and well-being. You are pleasant, sympathetic, and cooperative.`
      text: 'Votre score est haut, cela indique de vous portez un grand interet au autres et leurs bien etre. Votre entourage dit de vous que vous êtes quelqu\'un d\'agréable, sympathique et cooperatif.'
    }
  ],
  facets: [
    {
      facet: 1,
//      title: 'Trust',
      title: 'Confiance',
//      text: `A person with high trust assumes that most people are fair, honest, and have good intentions. Persons low in trust see others as selfish, devious, and potentially dangerous.`
      text: 'Avec un score haut, vous partez du principe que la plus part des gens sont juste, honnete et ont de bonne intentions. Avec un score bas, vous partez du principe que la plus part des gens sont égocentrique, sournois et potentiellement dangereux.'
    },
    {
      facet: 2,
//      title: 'Morality',
      title: 'Moralité',
//      text: `High scorers on this scale see no need for pretense or manipulation when dealing with others and are therefore candid, frank, and sincere. Low scorers believe that a certain amount of deception in social relationships is necessary. People find it relatively easy to relate to the straightforward high-scorers on this scale. They generally find it more difficult to relate to the unstraightforward low-scorers on this scale. It should be made clear that low scorers are not unprincipled or immoral; they are simply more guarded and less willing to openly reveal the whole truth.`,
      text: 'Avec un score haut, vous ne voyez aucun interet aux faux semblant ou à la manipulation lors de vos interaction avec les autres, vous préfererez la franchise et la sincérité. Vos relations sociale sont simple et apaisé. Avec un score bas, vous etes partisant d\'une dose de déception dans vos relations sociale. Vos relations sociales sont plus complexe et prudente qu\'ouverte et sincére.'
    },
    {
      facet: 3,
//      title: 'Altruism',
      title: 'Altruisme',
//      text: `Altruistic people find helping other people genuinely rewarding. Consequently, they are generally willing to assist those who are in need. Altruistic people find that doing things for others is a form of self-fulfillment rather than self-sacrifice. Low scorers on this scale do not particularly like helping those in need. Requests for help feel like an imposition rather than an opportunity for self-fulfillment.`,
      text: 'Les individu altruiste aprécie aider les autres sans forcement de gratification en retour. En conscéquence, ils assisteront volontairement ceux en ayant besoin. Les altruiste trouve une forme d\'épanouissement en accomplissant des choses pour les autres. Avec un score bas, vous n\'aimez pas particuliérement aider ceux qui sont dans le besoin. Vous vivez les demandes d\'aide comme un ordre et non une opportunité d\'épanouissement.'
    },
    {
      facet: 4,
//      title: 'Cooperation',
      text: 'Coopération',
//      text: `Individuals who score high on this scale dislike confrontations. They are perfectly willing to compromise or to deny their own needs in order to get along with others. Those who score low on this scale are more likely to intimidate others to get their way.`,
      text: 'Avec un score haut, vous n\'aimez pas la confrontation. Vous preférerez faire des compromis ou renier vos besoins pour bien vous entendre avec les autres. Avec un score bas, vous préfererez intimidez les autres pour mener les choses où vous le souhaitez.'
    },
    {
      facet: 5,
//      title: 'Modesty',
      title: 'Modestie',
//      text: `High scorers on this scale do not like to claim that they are better than other people. In some cases this attitude may derive from low self-confidence or self-esteem. Nonetheless, some people with high self-esteem find immodesty unseemly. Those who are willing to describe themselves as superior tend to be seen as disagreeably arrogant by other people.`,
      text: 'Avec un score haut, vous n\'appréciez pas la comparaison au autres. Dans certain cas, vous aurez moins confiance en vous ou une tendance a vous sous estimer. Néanmoins, Vous trouvez les autres, ayant une haute estime d\'eux même inconvenants. Ceux se décrivant comme supérieur vous sont désagréable et vous semble arrogant.'
    },
    {
      facet: 6,
//      title: 'Sympathy',
      title: 'Sympathie',
//      text: `People who score high on this scale are tenderhearted and compassionate. They feel the pain of others vicariously and are easily moved to pity. Low scorers are not affected strongly by human suffering. They pride themselves on making objective judgments based on reason. They are more concerned with truth and impartial justice than with mercy.`,
      text: 'Avec un score haut, vous êtes tendre et empathique. Vous ressentez la douleurs ou les soucis des autres et ressentez de la compassion. Avec un score bas, vous n\'etes pas touché par les souffances des autres. Vous vous considérez comme quelqu\'un d\'objectif au jugement basé sur la raison plus concerné par l\'impartialité que par la compassion.'
    }
  ]
}
