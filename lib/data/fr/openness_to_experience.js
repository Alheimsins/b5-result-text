module.exports = {
  domain: 'O',
  title: 'Ouverture d\'esprit',
//  shortDescription: 'Openness to Experience describes a dimension of cognitive style that distinguishes imaginative, creative people from down-to-earth, conventional people.',
  shortDescription: 'L\'ouverture d\'esprit représente le verssant imaginatif de la personnalité, differentiant les personnalité créative ou terre à terre des personnalité conventionnelle.',
//  description: `Open people are intellectually curious, appreciative of art, and sensitive to beauty. They tend to be, compared to closed people, more aware of their feelings. They tend to think and act in individualistic and nonconforming ways. Intellectuals typically score high on Openness to Experience; consequently, this factor has also been called Culture or Intellect.
//  <br /><br />
//  Nonetheless, Intellect is probably best regarded as one aspect of openness to experience. Scores on Openness to Experience are only modestly related to years of education and scores on standard intelligent tests.
//  <br /><br />
//  Another characteristic of the open cognitive style is a facility for thinking in symbols and abstractions far removed from concrete experience. Depending on the individual's specific intellectual abilities, this symbolic cognition may take the form of mathematical, logical, or geometric thinking, artistic and metaphorical use of language, music composition or performance, or one of the many visual or performing arts.
//  <br /><br />
//  People with low scores on openness to experience tend to have narrow, common interests. They prefer the plain, straightforward, and obvious over the complex, ambiguous, and subtle. They may regard the arts and sciences with suspicion, regarding these endeavors as abstruse or of no practical use. Closed people prefer familiarity over novelty; they are conservative and resistant to change.
//  <br /><br />
//  Openness is often presented as healthier or more mature by psychologists, who are often themselves open to experience. However, open and closed styles of thinking are useful in different environments. The intellectual style of the open person may serve a professor well, but research has shown that closed thinking is related to superior job performance in police work, sales, and a number of service occupations.`,
  description: `Les personnes ouverte d\'esprit sont intellectuellement curieuse, aprécie l\'art et sensible à la beauté. Ils tendent à être estimé comme des gens proche et plus en phase avec leurs émotions. Ils agissent en tant qu\'individu de façon non conventionnelle. Les intellectuels on typiquement un score haut en ouverture d\'esprit, en conscéquence, ce facteur est aussi appellé Culture ou Intellect.
    <br /><br />
    Néanmoins, l\'intellect est probalement l\'aspect le plus considéré de l\'ouverture d\'esprit. Ce score n\'est que peu corrélé aux années d\'experience ou au test d\'intélligence standard.
    <br /><br />
    Une autre caracteristique de l\'ouverture cognitive est la facilité d\'abstration des concepts plutot que la limitation aux faits. Ramener à un individu, cette capacité intellectuelle peut se traduire par des forme de pensé orienté vers les mathématique, la logique, la géometrie, l\'art, les métaphores verbale, la musique ou bien d\'autre forme d\'arts.
    <br /><br />
    Les individus présentant un score bas tendent à avoir des centres d\'intérêt plus restreint. Ils prefèreront de reflexion simple, claire plutôt que complexe, ambigu ou subtile. Ils voit les reflexion artistique et scientigique comme etant obscure et complexe a mettre en oeuvre. Ils préférerons la routine à la nouveauté. Ils sont conservateur et resistant au changement.
    <br /><br />
    L\'ouverture d\'esprit est souvent présentée comme étant une preuve de mature et plus saine pour l'esprit. Cependant ces systemes de pensés présentes des avantages et des inconvénients en fonction de l\'environnement de l\'individu. Par exemple, un score haut aidera les professeur à l'inverse, un score bas aidera les policiers ou commerciaux.`,
  results: [
    {
      score: 'low', // do not translate this line
//      text: `Your score on Openness to Experience is low, indicating you like to think in plain and simple terms. Others describe you as down-to-earth, practical, and conservative.`
      text: 'Votre score est bas, cela indique que vous aimez refléchir en terme simple. Votre entourage vous décrit comme quelqu\'un de conservateur, pratique et/ou terre à terre'
    },
    {
      score: 'neutral', // do not translate this line
//      text: `Your score on Openness to Experience is average, indicating you enjoy tradition but are willing to try new things. Your thinking is neither simple nor complex. To others you appear to be a well-educated person but not an intellectual.`
      text: 'Votre score est dans la moyenne, cela indique que vous aimez les traditions mais également que vous n\'etes pas contre les nouvelles choses. Votre mode de penser est plus simple que complexe. Votre entrouge vous vois comme quelqu\'un de bien éduqué mais pas non plus un intellectuel.'
    },
    {
      score: 'high', // do not translate this line
//      text: `Your score on Openness to Experience is high, indicating you enjoy novelty, variety, and change. You are curious, imaginative, and creative.`
      text: 'Votre score est haut, cela indique que vous aimez, tenter de nouvelles experiences, varier les plaisir et le changement en règle générale. Vous êtes curieux, imaginatif et créatif'
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Imagination',
//      text: `To imaginative individuals, the real world is often too plain and ordinary. High scorers on this scale use fantasy as a way of creating a richer, more interesting world. Low scorers are on this scale are more oriented to facts than fantasy.`,
      text: 'Comme quelqu\'un d\'imaginatif, le monde réel vous semble trop simple et ordinaire. Avec un score haut, vous utilisez la fantaisie pour enrichir et rendre plus interressant votre monde. Avec un score bas, vous etes plus terre à terre et vous interressez plus aux faits.'
    },
    {
      facet: 2,
      title: 'Artistic Interests',
//      text: `High scorers on this scale love beauty, both in art and in nature. They become easily involved and absorbed in artistic and natural events. They are not necessarily artistically trained nor talented, although many will be. The defining features of this scale are interest in, and appreciation of natural and artificial beauty. Low scorers lack aesthetic sensitivity and interest in the arts.`,
      text: 'Avec un score haut, vous aimez la beauté aussi bien formelle que fonctionnelle. Vous etes facilement absorbé par ces événements. Vous n\'êtes pas necessairement artiste vous même mais vous savez en apprécier les attraits. Avec un score bas, vous êtes assez peu sensible ou ne montrez que peu d\'interet pour les arts en générale'
    },
    {
      facet: 3,
      title: 'Emotionality',
//      text: `Persons high on Emotionality have good access to and awareness of their own feelings. Low scorers are less aware of their feelings and tend not to express their emotions openly.`,
      text: 'Avec un score haut, vous accédez facilement a vos émotions et y êtes attentif. Avec un score bas, vous êtes moins attentif à vos émotions et avez tendance a les refouler ou ne pas les exprimer ouvertement.'
    },
    {
      facet: 4,
      title: 'Adventurousness',
//      text: `High scorers on adventurousness are eager to try new activities, travel to foreign lands, and experience different things. They find familiarity and routine boring, and will take a new route home just because it is different. Low scorers tend to feel uncomfortable with change and prefer familiar routines.`,
      text: 'Avec un score haut, vous êtes un fervent défenseur du changement, vous aimez voyager ou découvrir de nouvelles experiences. Vous trouvez la routine ennuiyante et cherchez de nouveau chemin juste parce qu\'ils sont différents. Avec un score bas vous n\'aimez pas le changement et préférez la routine.'
    },
    {
      facet: 5,
      title: 'Intellect',
//      text: `Intellect and artistic interests are the two most important, central aspects of openness to experience. High scorers on Intellect love to play with ideas. They are open-minded to new and unusual ideas, and like to debate intellectual issues. They enjoy riddles, puzzles, and brain teasers. Low scorers on Intellect prefer dealing with either people or things rather than ideas. They regard intellectual exercises as a waste of time. Intellect should not be equated with intelligence. Intellect is an intellectual style, not an intellectual ability, although high scorers on Intellect score slightly higher than low-Intellect individuals on standardized intelligence tests.`,
     text: 'L\'intellect et le sens artistique sont deux trait important de l\'ouverture d\'esprit. Avec un score haut, vous aimez jouer avec les concepts, les idées inhabituelles et les débats intellectuels. Vous appréciez les devinnettes, les puzzles et autre casse-tête. Avec un score bas, vous préférer discuter avec d\'autre personnes partageant le même point de vue que vous. Vous considéré comme une perte de temps les exercices intellectuel. L\'intellecte ne doit pas etre confondu avec l\'intelligence, c\'est un type d\'intelligence et non une compétence intellectuelle, bien que ceux avec un score élevé présente un score plus élevé aux test standard d\'intelligence.'
    },
    {
      facet: 6,
      title: 'Liberalism',
//      text: `Psychological liberalism refers to a readiness to challenge authority, convention, and traditional values. In its most extreme form, psychological liberalism can even represent outright hostility toward rules, sympathy for law-breakers, and love of ambiguity, chaos, and disorder. Psychological conservatives prefer the security and stability brought by conformity to tradition. Psychological liberalism and conservatism are not identical to political affiliation, but certainly incline individuals toward certain political parties.`,
      'text': 'Le libéralisme psychologique fait référence à la capacité d\'acceptation des changement d\'autorité, de convention ou de valeurs. Avec un score haut, vous préférez les comportements rebels, anarchique. Avec un score bas vous préférez la sécurité, la stabilité et la conformité aux traditions.'
    }
  ]
}
