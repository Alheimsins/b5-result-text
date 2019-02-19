module.exports = {
  domain: 'N',
//  title: 'Neuroticism',
  title: 'Névrotisme',
//  shortDescription: 'Neuroticism refers to the tendency to experience negative feelings.',
  shortDescription: 'Névrotisme réfère à une tendance à vivre des émotions négatives',
//  description: `Freud originally used the term neurosis to describe a condition marked by mental distress, emotional suffering, and an inability to cope effectively with the normal demands of life. He suggested that everyone shows some signs of neurosis, but that we differ in our degree of suffering and our specific symptoms of distress. Today neuroticism refers to the tendency to experience negative feelings.
//<br /><br />
//  Those who score high on Neuroticism may experience primarily one specific negative feeling such as anxiety, anger, or depression, but are likely to experience several of these emotions.
//  <br /><br />
//  People high in neuroticism are emotionally reactive. They respond emotionally to events that would not affect most people, and their reactions tend to be more intense than normal. They are more likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult.
//  <br /><br />
//  Their negative emotional reactions tend to persist for unusually long periods of time, which means they are often in a bad mood. These problems in emotional regulation can diminish a neurotic's ability to think clearly, make decisions, and cope effectively with stress.`,
  description: `Freud utilisait origninellement le terme "névrose" pour décrire une situation mentalement boulversante, émotionnellement bléssante et une incapacité à surmonter les situation normal de la vie. Il a suggegeré que chacun montre des signes de névrose, mais que nous en souffrons à différents dégrés et de façon differentes. Aujourd'hui le neuroticisme se référe a la gestion des situations émotionnellement négative.
    <br /><br />
    Ceux ayant un score haut éprouve principalement un sentiment spécifique négatif comme l\'anxiété, la colère ou la dépression, mais probalement plusieurs de ces dernières.
    <br /><br />
    Les individus aux score haut sont émotionnellement réactifs. Ils répondent émotionnellement aux événements qui normalement n\'affecterai pas la les autres, et ils réagissent plus intensément que la normal. Ils interpretent les situations normale comme menaçante, et minor les frustrations comme le désespoir.
    <br /><br />
    Leurs réactions émotionnelles négatives on tendance à persister exceptionnellement sur de longue periode, ce qui signifie qu'ils se sentent mal. Ces problèmes dans le régulations des émotions peut etre diminué par des capacité de pensé claires, prendre des décisions et surmonter efficaement de stress`,
  results: [
    {
      score: 'low', // do not translate this line
//      text: `Your score on Neuroticism is low, indicating that you are exceptionally calm, composed and unflappable. You do not react with intense emotions, even to situations that most people would describe as stressful.`,
      text: 'Votre score bas indique que vous êtes exceptionnellement calm et inperturbable. Vous ne réagissez pas intensément à vos émotions, même dans des situations stressantes.'
    },
    {
      score: 'neutral', // do not translate this line
//      text: `Your score on Neuroticism is average, indicating that your level of emotional reactivity is typical of the general population. Stressful and frustrating situations are somewhat upsetting to you, but you are generally able to get over these feelings and cope with these situations.`,
      text: 'Votre score dans la moyenne indique que vous réagissez à vos émotions comme la plus part des gens. Les situations stressantes et frustrante vous aggasse, mais généralement vous controller vos sentiments pour faire face à ces situations.'
    },
    {
      score: 'high', // do not translate this line
//      text: `Your score on Neuroticism is high, indicating that you are easily upset, even by what most people consider the normal demands of living. People consider you to be sensitive and emotional.`,
      text: 'Votre score haut indique que vous vous aggassez facilement, même dans les situations considérées comme normale. Les autres vous considère comme sensible et émotionnellement réceptif.'
    }
  ],
  facets: [
    {
      facet: 1,
//      title: 'Anxiety',
      title: 'Anxiété',
//      text: `The "fight-or-flight" system of the brain of anxious individuals is too easily and too often engaged. Therefore, people who are high in anxiety often feel like something dangerous is about to happen. They may be afraid of specific situations or be just generally fearful. They feel tense, jittery, and nervous. Persons low in Anxiety are generally calm and fearless.`,
      text: 'Avec un score haut, le mécanisme "combat-fuite" de votre cerveau se déclenche plus facilement ou trop souvent. Cela induit un haut niveau d\'anxiété et souvent un sentiment de danger vous submerge dans certaine situation ou en permanence. Vous vous sentez tendu et nerveux. Avec un score bas, vous etes généralement calme.',
    },
    {
      facet: 2,
//      title: 'Anger',
      title: 'Colère',
//      text: `Persons who score high in Anger feel enraged when things do not go their way. They are sensitive about being treated fairly and feel resentful and bitter when they feel they are being cheated. This scale measures the tendency to feel angry; whether or not the person expresses annoyance and hostility depends on the individual's level on Agreeableness. Low scorers do not get angry often or easily.`,
      text: 'Avec un score haut, vous vous sentez enragé quand les choses vont de travers. Vous exigé d\'etre traité avec équité et vous vous sentez aigri et amère quand vous avez l\'impression d\'etre flouez. Cet indice mesure la tendance a vous sentir énervé. En fonction de votre niveau de convivialité vous exprimez votre hostilité et votre mécontentement. Avec un score bas, vous n\'êtes pas enervé souvant ni facilement'
    },
    {
      facet: 3,
//      title: 'Depression',
      title: 'Dépression',
//      text: `This scale measures the tendency to feel sad, dejected, and discouraged. High scorers lack energy and have difficult initiating activities. Low scorers tend to be free from these depressive feelings.`,
      text: 'Cet indice mesure la tendance a se sentir triste, rejeté et découragé. Avec un score haut, vous vous avez moins d\'énergie et des difficultés a prendre des initiatives. Avec un score bas, vous tendez a vous libérer de ces sentiments dépréssif.'
    },
    {
      facet: 4,
//      title: 'Self-Consciousness',
      title: 'Conscience de soi',
//      text: `Self-conscious individuals are sensitive about what others think of them. Their concern about rejection and ridicule cause them to feel shy and uncomfortable abound others. They are easily embarrassed and often feel ashamed. Their fears that others will criticize or make fun of them are exaggerated and unrealistic, but their awkwardness and discomfort may make these fears a self-fulfilling prophecy. Low scorers, in contrast, do not suffer from the mistaken impression that everyone is watching and judging them. They do not feel nervous in social situations.`,
      text: 'La conscience de soit est sensible a ce que les autres pense de vous. Elle concerne les cause de rejet et de ridicule et entraine un sentiment d\'inconfort et de la timidité. Avec un score haut, vous vous sentez souvent embarassé et honteux. Vous avez peur que les autres vous critique ou se moque de vous de façon exagérée et irréaliste. vous avez peur que votre maladresse et votre inconfort vous empeche de vous développer. Avec un score bas, vous ne souffrez pas du regarde ou du jugement des autre. Vous n\'êtes pas nerveux dans vos interactions sociales.
    },
    {
      facet: 5,
//      title: 'Immoderation',
      title: 'Immodération',
//      text: `Immoderate individuals feel strong cravings and urges that they have have difficulty resisting. They tend to be oriented toward short-term pleasures and rewards rather than long-term consequences. Low scorers do not experience strong, irresistible cravings and consequently do not find themselves tempted to overindulge.`,
      text: 'Avec un score haut, vous vous ressentez de forte envies ou urgences que vous avez du mal a controller. Vous vous tournez plus facilement vers les récompenses ou plaisirs immédiat plutot qu\'a long-terme. Avec un score bas, vous n\'avez pas d\'envis irresistible et n\'êtes pas tenté par des excès.'
    },
    {
      facet: 6,
//      title: 'Vulnerability',
      title: 'Vulnérabilité',
//      text: `High scorers on Vulnerability experience panic, confusion, and helplessness when under pressure or stress. Low scorers feel more poised, confident, and clear-thinking when stressed.`,
      text: 'Avec un socre haut, vous pouvez vous sentir paniquer, confus et impuissant quand vous etes soumis au stress ou à la pression. Avec un score bas vous vous sentez posé, confiant et clair voyant sous l\'effet du stress'
    }
  ]
}
