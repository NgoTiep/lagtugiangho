const questionBank = [
  {
    id: 1,
    question: "In preparing for your negotiation, objectives and interests must be taken into account. However, what are the two potential pitfalls in these?",
    options: [
      "Objectives are not so \"objective\" because they tend to include a sizeable amount of subjectivity.",
      "Objectives - what to aim for - may be mistaken for strategy - how to get there.",
      "Most negotiation stakes are not simply about the maximization of quantitative interests by rational individuals.",
      "Interests may not be in line with a negotiator's motivations."
    ],
    correctAnswers: [0, 1],
    type: "multiple"
  },
  {
    id: 2,
    question: "Two key questions should be asked when analyzing the problem dimension. Which of the following are the correct questions?",
    options: [
      "How can I motivate myself to set the right objectives?",
      "Deep inside, which motivations do I try to fulfill through negotiation - I want X, but why do I want X?",
      "What do I know about the motivations of the other negotiator across the table - why do they ask what they ask?",
      "To what extent do we have common interests, which we do not need to discuss ?"
    ],
    correctAnswers: [1, 2],
    type: "multiple"
  },
  {
    id: 3,
    question: "What is the difference between motivations and the mandate? Which two statements are correct?",
    options: [
      "The motivation is: I'd like to go as far as possible in that direction.",
      "The motivation is: I'd like to get the best possible result in order to earn recognition from my agent.",
      "The mandate is: my boss expects I go at least that far, and I must absolutely not step over this red line.",
      "The mandate is: my boss sets me a bottom-line set of objectives and expects me to give it that extra bit of energy and commitment to obtain more than what was expected."
    ],
    correctAnswers: [1, 2],
    type: "multiple"
  },
  {
    id: 4,
    question: "For the tactical preparation of a negotiation, three questions should be asked: Which package of solutions should I put first on the table, in order to anchor the ............. around it? Which ............. should I have in mind? Which ............. to add to the table, or remove? And the same on their side; What is the ultimate ............. you will throw on the table if need be and only if need be. Which following word progression fits with the above statements?",
    options: [
      "Discussion, objective, solution, bargaining chip",
      "Trade off, position, mandate, threat",
      "Concession, concession, solution, solution",
      "Discussion, concession path, solution, bargaining chip"
    ],
    correctAnswers: [3],
    type: "single"
  },
  {
    id: 5,
    question: "There are three ways a solution will be accepted by the other side. Which of the following constitute the three?",
    options: [
      "The solution is mutually satisfactory. It is in line with your motivation, but also with theirs.",
      "Identify, on another item of the negotiation, a solution which they want, but which you do not like. Then agree on a trade-off.",
      "Use a carrot and stick approach, blended with respect and politeness, to offer solutions and highlight the risks and threats if they do not accept.",
      "Convince the other negotiators by building a demonstration using objective points of reference (justifications) which are difficult to deny."
    ],
    correctAnswers: [0, 1, 3],
    type: "multiple"
  },
  {
    id: 6,
    question: "Good negotiations will include two of the following. Which?",
    options: [
      "A unique solution that fits everyone's needs.",
      "A package deal solution addressing as many variables as possible.",
      "A logical, proven set of standard solutions.",
      "Creative, value-driven solutions that can be traded for mutual satisfaction."
    ],
    correctAnswers: [1, 3],
    type: "multiple"
  },
  {
    id: 7,
    question: "As a negotiator, you must try and trade solutions which do not cost you a lot, but bring value to the other side of the table; AND get, by way of reciprocity, solutions which bring a lot of value to you but do not cost too much to the other side.",
    options: ["True", "False"],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 8,
    question: "Using justifications are powerful in that they:",
    options: [
      "Enable you to refuse the other's solution, not because \"you do not like it\" (although that may be the case), but because there is a legitimate reason to take it off the table.",
      "Provide \"destabilizing arguments\" that allow you to score psychological points over the adversary and sap their energy to resist your solution.",
      "Help you maintain the relationship with the other side: \"I'm not saying no, but facts X and Y justify that we do not include this option in the deal\".",
      "Provide a springboard for exploring other, legitimately anchored solutions."
    ],
    correctAnswers: [2, 3],
    type: "multiple"
  },
  {
    id: 9,
    question: "Personal relationships between the people at the table are crucial to the success of a negotiation. Match the following situations with the step : \"You will negotiate with someone you're never met before\"",
    options: [
      "Providing explanations or even an apology for whatever happened, bringing a small gift, could help mend the relationship. If you suspect that the situation is worse, then it is in your own interest to consider swapping your role for a colleague or, as a last option, bringing a third party between the two negotiators, to act as a go-between.",
      "Be aware that your own perceptions might be biased because of assumptions, clichés or stereotypes. Show benevolence and grant the benefit of the doubt. Make sure you have enough time to introduce each other. Build a minimum working relationship before entering the substance.",
      "You've established rapport, you trust each other, and your relationship is one of respect. Check this again and if it is indeed the case, then you may move on rapidly to negotiating."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 10,
    question: "Now match the following situations with the step : \"You already know the person you are going to negotiate with\"",
    options: [
      "Providing explanations or even an apology for whatever happened, bringing a small gift, could help mend the relationship. If you suspect that the situation is worse, then it is in your own interest to consider swapping your role for a colleague or, as a last option, bringing a third party between the two negotiators, to act as a go-between.",
      "Be aware that your own perceptions might be biased because of assumptions, clichés or stereotypes. Show benevolence and grant the benefit of the doubt. Make sure you have enough time to introduce each other. Build a minimum working relationship before entering the substance.",
      "You've established rapport, you trust each other, and your relationship is one of respect. Check this again and if it is indeed the case, then you may move on rapidly to negotiating."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 11,
    question: "Last, match the following situations with the step : \"You've already met the person before but there was a problem and this affected your relationship.\"",
    options: [
      "Providing explanations or even an apology for whatever happened, bringing a small gift, could help mend the relationship. If you suspect that the situation is worse, then it is in your own interest to consider swapping your role for a colleague or, as a last option, bringing a third party between the two negotiators, to act as a go-between.",
      "Be aware that your own perceptions might be biased because of assumptions, clichés or stereotypes. Show benevolence and grant the benefit of the doubt. Make sure you have enough time to introduce each other. Build a minimum working relationship before entering the substance.",
      "You've established rapport, you trust each other, and your relationship is one of respect. Check this again and if it is indeed the case, then you may move on rapidly to negotiating."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 12,
    question: "Most negotiations on behalf of a mandate follow a 3-step process. Which ONE of the following IS NOT one of these steps?",
    options: [
      "Getting instructions from your boss.",
      "Negotiating at the table while respecting the mandate",
      "Proposal, counter-proposal, agreement.",
      "Returning to the boss and explaining what happened."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 13,
    question: "A “right” mandate is one which is…",
    options: [
      "Clear on motivations, objectives, priorities and reasonably flexible on possible solutions.",
      "Clear on the purpose, strict on possible solutions, and firm on your position."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 14,
    question: "\"Better no deal, than a deal outside your mandate.\" What mistake does the negotiator make for this statement to arise?",
    options: [
      "The negotiator made an initial error of judgement when deciding on the mandate with his/her superior.",
      "The negotiator wanted the deal so badly that he/she overstepped the mandate to achieve this."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 15,
    question: "What can a negotiator do if a new, unexpected element enters the negotiation?",
    options: [
      "Call for a break in the negotiation – even if a for two minutes – check with your boss (via email, mobile or text message and update the mandate as required.",
      "Keep calm and carry on - nothing must deviate the negotiator from his/her goals.",
      "Make note of the unexpected element and prepare to follow this up after the negotiation with a demand to the other participants to meet again to discuss the new element."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 16,
    question: "If a negotiator doesn't agree on the mandate, then this will have an effect on the motivation to negotiate effectively. Settle this aspect before the negotiation takes place by returning to the mandate and requesting modification or try to be replaced by a colleague.",
    options: ["True", "False"],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 17,
    question: "Three initial reasons for a mandate overstepping its scope are lack of preparation, lack of understanding and an unclear mandate. What preventive action is NOT required among the following?",
    options: [
      "Prepare, prepare, prepare.",
      "Ask for advice beforehand.",
      "Get everyone’s name correct.",
      "Specify what needs to be clarified in the mandate."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 18,
    question: "What action should you take if your Principal (boss) gives you a free hand for the negotiating mandate?",
    options: [
      "Draft your own mandate, send it to your boss for sign off and state (politely) that suggestions are welcome.",
      "Thank him/her, draft your own mandate, execute it and then report back to your boss."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 19,
    question: "During the negotiation, don't forget the limits of your mandate. Once back from the negotiation, be prepared to ........................your boss.",
    options: ["Tell", "Convince", "Hide it from"],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 20,
    question: "What duty should a negotiator remind him/herself of when under high pressure from the other side to agree to something?",
    options: [
      "The job of a negotiator is to say \"Yes\" if it means keeping long-term relations healthy.",
      "The job of a negotiator is to use diplomacy in order to reduce the effect of the pressure upon him/her.",
      "The job of a negotiator is to say \"No\" if need be."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 21,
    question: "If the negotiator (agent) finds the mandate given by his/her boss (the principal) unrealistic, the negotiator should return to the mandate initially provided and negotiate the points he/she feels require modification.",
    options: ["True", "False"],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 22,
    question: "What is the definition of a ZOPA?",
    options: [
      "Zone of Operational Personal Agreement.",
      "Zone of Possible Agreements.",
      "Zone of Perspectives on Action."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 23,
    question: "Which of the following IS NOT a reason for the absence of a ZOPA?",
    options: [
      "Mandates from each side do not overlap – there is no common ground for win-win.",
      "Motivations from each side may be strictly at odds.",
      "Some stakeholders are absent from discussions.",
      "Each party's Plan B (Solution Away from the Table) may be better than the solutions proposed at the table."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 24,
    question: "Which of the following are reasons for failure in negotiations? (Select all that apply)",
    options: [
      "The trap of the gorilla syndrome – the negotiators try to over-impress each other.",
      "The negotiators are hard on the problem, soft on people.",
      "Negotiators start with excessive demands which cannot be met.",
      "The plan B has been underestimated."
    ],
    correctAnswers: [0, 2],
    type: "multiple"
  },
  {
    id: 25,
    question: "A negotiation isn't a binary “deal, no deal” process. Which of the following ISN'T one of the the usual steps involved in reaching a final agreement?",
    options: [
      "Agreement to meet again.",
      "Agreement on the disagreement.",
      "Contingent agreements.",
      "Avoidance of factors that can jeopardize an agreement."
    ],
    correctAnswers: [3],
    type: "single"
  },
  {
    id: 26,
    question: "Among the following statements, which are correct in negotiation?",
    options: [
      "You should speak first, and listen afterwards.",
      "Do not focus on positions.",
      "In negotiation you need to claim value first.",
      "Separate the people from the problem.",
      "Use subjective criteria."
    ],
    correctAnswers: [1, 3],
    type: "multiple"
  },
  {
    id: 27,
    question: "Which of the following features do not help build effective communication?",
    options: [
      "Closed questions.",
      "Empathy.",
      "Background information.",
      "Active listening.",
      "Aggressiveness."
    ],
    correctAnswers: [0, 4],
    type: "multiple"
  },
  {
    id: 28,
    question: "Which of the following statements are obstacles to negotiation success?",
    options: [
      "Positional bargaining.",
      "Joint problem solving.",
      "Value creation.",
      "No criteria of legitimacy for options.",
      "Being tough on the problem."
    ],
    correctAnswers: [0, 3],
    type: "multiple"
  },
  {
    id: 29,
    question: "Among the following statements, which are correct in negotiation?",
    options: [
      "You need to anticipate the possible conflicts of interests between principals and agents.",
      "You should speak first, and listen afterwards.",
      "You should claim value and distribute it afterwards.",
      "The objective of a negotiation is to get an agreement.",
      "What we should do first things first in negotiation is the essential.",
      "Everything can be negotiated."
    ],
    correctAnswers: [0, 4, 5],
    type: "multiple"
  },
  {
    id: 30,
    question: "Among the following recommendations, which ones seem relevant to you?",
    options: [
      "Separate people issues from substantive issues.",
      "Focus on positions and not on interests or motivations.",
      "Consider negotiation as a zero-sum game.",
      "Anchor on justification criteria to settle a conflict.",
      "Identify the best solution away from the table before negotiating.",
      "Always end a negotiation with an agreement and accept it."
    ],
    correctAnswers: [0, 4],
    type: "multiple"
  },
  {
    id: 31,
    question: "In the following 10-trump preparation plan, match up the item “Who?” to its appropriate dimension.",
    options: [
      "Core motivations, Solutions at the table, Solutions Away From the table, Justifications.",
      "Organization, Communication, Logistics.",
      "Personal relationships, Mandate, Stakeholder’s Map."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 32,
    question: "In the following 10-trump preparation plan, match up the item “What?” to its appropriate dimension.",
    options: [
      "Core motivations, Solutions at the table, Solutions Away From the table, Justifications.",
      "Organization, Communication, Logistics.",
      "Personal relationships, Mandate, Stakeholder’s Map."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 33,
    question: "In the following 10-trump preparation plan, match up the item “How?” to its appropriate dimension.",
    options: [
      "Core motivations, Solutions at the table, Solutions Away From the table, Justifications.",
      "Organization, Communication, Logistics.",
      "Personal relationships, Mandate, Stakeholder’s Map."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 34,
    question: "Which of the following ARE NOT bargaining tactics that you may be confronted with by your opposites at the table?",
    options: [
      "Linkage",
      "Extreme anchoring",
      "Carpet selling",
      "Red herring",
      "White elephant",
      "Good cop/bad cop",
      "My hands are tied",
      "My lips are sealed",
      "The \"icing on the cake\""
    ],
    correctAnswers: [2, 4, 7],
    type: "multiple"
  },
  {
    id: 35,
    question: "Among the actions listed below, which one should you take when faced with the \"ultimatum\" tactic your opposite might use?",
    options: [
      "Re-orient your opposite to the points you had initially agreed to discuss or gain time in order to assess the meaning and cost of the new item on the agenda.",
      "First, resist hasty reaction and instead compare with your best solution away from the table. Next, thank your opposite for the offer and then propose a higher figure than your Plan B, as your own \"last offer\".",
      "Remain calm and do not give way to pressure, do not mix the People and the Problem. Stick to the facts and insist on rules of the game. Finally, if your plan “B”’ enables it, leave the room in the first meeting."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 36,
    question: "In a negotiation it is crucial to have effectively prepared your Solution Away From the Table (SAFT) Why? Select the right answers among those below.",
    options: [
      "It will enable you to make a deal only if the solutions traded at the table are more interesting than the solution away from the table.",
      "It will enable you to make a comparison between what seems to be disappointing solutions at the table with the reality you will be faced with when leaving the room without a deal.",
      "It will enable you to set discussions with your opposite into motion again by talking about the “what if there was no deal? What will we do?” scenario.",
      "It provides the main ingredient for the power balance around the table and will enable you, if you have a comfortable SAFT, to be stronger in your demands at the table because the other negotiator will have to match your expectations.",
      "Once effectively prepared, it will enable you to fine-tune and adjust your mandate to the various interests of the stakeholders around the table, thus generating the best possible scenario for a mutually agreed solution even if you do not reach your principal’s expectations."
    ],
    correctAnswers: [0, 1, 2, 3],
    type: "multiple"
  },
  {
    id: 37,
    question: "An international negotiator with a low context culture:",
    options: [
      "Insists on addressing counterparts by their titles.",
      "Avoids personal anecdotes, and refrains from questions regarding private and family aspects of his/her counterpart.",
      "Tries to start the discussion on a first-name basis."
    ],
    correctAnswers: [0, 1],
    type: "multiple"
  },
  {
    id: 38,
    question: "Given your knowledge of the typologies of cultures, when meeting for the first time with your Italian counterparts to discuss the terms of a possible deal, you make a note to pay close attention to:",
    options: [
      "Using your Italian dictionary to greet them in their language.",
      "Leaving aside enough time for greetings and small talk to gather as much information as possible.",
      "Not let them control the exchange. They talk a lot so you have to structure the discussion.",
      "Let them speak and always make sure to ask complementary questions and then rephrase to clarify your understanding before moving on."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 39,
    question: "You've been designated by your principal to lead the company's team for next month's client meeting in Houston, Texas. The US is a new territory to you, after being posted in Latin America for 10 years. You expect the discussions to be:",
    options: [
      "Easy going, with all cards on the table and a quick look over the details of the new contract. We are partners, the implementation will go smoothly.",
      "Friendly and direct at first and then a full-blown argument over the financial aspects of the deal. Ultimately, what's not written down in the deal does not exist.",
      "Tough. Americans have a reputation for being sharks in business suits. I'd be well-informed to keep as much information from them and keep an ace or two up my sleeve when time comes to hash out the distribution of the expected profits."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 40,
    question: "When a negotiator from a ‘high-context’ culture meets his counterpart from a ‘low context’ culture, who is more at risk of being faced with harsh difficulties?",
    options: [
      "The negotiator from the low context culture, because his very transparent style of communication, his expectation of a full exchange of information and his reliance on fact-based justification will be at odds with his high context culture counterpart.",
      "The negotiator from the high context culture, because he will be forced to reveal more information than he feels comfortable with, to make written commitments and adopt a quick style of making deals that are all in conflict with his cultural habits.",
      "Neither of them. indeed, aside from being from cultural backgrounds that are different, both of them developed professionally in a global company with its own internal culture. They will find common ground to negotiate this deal without a glitch."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 41,
    question: "Through non verbal expressions, one will express, among other things, an attitude toward his or her interlocutor. Among the following propositions, which one is most accurate?",
    options: [
      "In African cultures, a younger negotiator will often show respect to someone considered older by letting him/her speak while avoiding direct and intense eye contact.",
      "In Western cultures, which are mainly low-context, direct eye contact at the beginning of the meeting is enough. One does not need, afterwards, to insist on locking gazes to appear respectful.",
      "Looking directly into your counterpart's face and making physical contact is considered the best way to appear sincere in the US. It shows you do not hesitate."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 42,
    question: "Time-management, based on the perception of time, is a key element that differs between cultures and therefore will impact on your cross-cultural negotiations. What statement best describes what Edward T. Hall calls a ‘monochronic’ culture?",
    options: [
      "A culture that sees time in a linear fashion and therefore as a process that has to be sequenced into separate phases - open and closed - each contributing to an overall task, one after another.",
      "A culture whose participants are only comfortable doing one thing at a time. They have the hardest time managing two things at once or they take too much time on introductions.",
      "A culture thought of as managing tasks in a very equally divided - one hour one task - split of the working day."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 43,
    question: "For Hall, how would a negotiator from a ‘polychronic’ culture perceive the negotiation style of someone from a ‘monochronic’ one? Which statement best fit your impression?",
    options: [
      "This person is always looking at her watch, she probably likes it very much and wants me to notice it.",
      "This person is constantly looking at her watch. I wonder if maybe she needs to leave this meeting to attend to other more pressing business. I should tell her that I can wait for her, or that we could reconvene at another time. I too have other projects to take care of.",
      "She keeps looking at her watch, she must be in a rush to finish this deal. Ok, time to hurry up. I can make things easier for her."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 44,
    question: "On the other side of the table, Ms. B, an American business lawyer, is thinking:",
    options: [
      "If I keep staring at my watch there is no way he's not going to understand that we're on a tight time schedule and that we've not made any progress since we began these negotiations.",
      "My oh my, 4pm already and we're still talking about item #1 on the agenda. He keeps coming back with the same argument over and over and prevents this deal from moving forward. Incredible!",
      "This deal is going nowhere. I might as well kick back and relax. I will deal with my boss when I get back to the office. Let's enjoy this moment."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 45,
    question: "Communication takes place through the mobilization of various means and capacities. Direct communication is often thought of as the use of language to express one's thoughts. However, also very important for conveying meaning is the understanding of non-verbal cues. Among the following propositions, which one best describes non-verbal means of communicating?",
    options: [
      "Glances, looks, hand gestures, nodding of the head, tongue clicking, facial expressions and more.",
      "Any word that is made up.",
      "Songs, poetry, artistic expression."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 46,
    question: "While in the air, you look back on some of the previous experiences you’ve had conducting negotiations in different cultural contexts. Trial-and-error has always been a way to progress, but one has to try to not repeat the same ones. Which “experience” would you be best advised not to repeat?",
    options: [
      "A few years ago, while attempting to create a good atmosphere before a hard negotiation...",
      "A while back, you were a junior associate at the time... wore your best wax shirt, bought last summer in Senegal...",
      "Just last month - the learning never stops - you remember a boardroom meeting in your new offices in Shanghai. During the introduction to new board members, you caught yourself writing a quick note on a piece of paper in your coat pocket... only to realize that it was your new principal's business card."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 47,
    question: "It is more crucial to develop a cultural adaptation strategy when you are...",
    options: [
      "... given a very strict mandate, negotiating at home, within a multilateral context.",
      "... negotiating a bilateral agreement in your counterpart's setting when you know your level of interdependency is rather strong.",
      "... negotiating with Rome, in Rome the implementation of a project involving the members of the F.A.O."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 48,
    question: "Interpersonal factors play a key role in assessing your need for implementing a cultural adaptation strategy. It is especially the case if...",
    options: [
      "You have little knowledge of your counterpart's cultural traits, you're very new to the world of negotiation and feel uneasy regarding your new abilities. On top of that, you have never met the person who will negotiate for your company's counterpart.",
      "You've known Mr Chu for more than 10 years...",
      "You're starting with this new international investment firm. You've known Mrs McDowell since business school..."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 49,
    question: "Knowing what path to follow is always tricky and depends much on your own capacity to assess your level of comfort as a cross-cultural negotiator. For instance, In which of the following three cases do you consider the approach adopted to be coherent with the details of the situations:",
    options: [
      "You are a recent French hire in a top American company...",
      "You've lived in Japan for the best part of three years now... recommend they let you be the go-between...",
      "You have been scheduled to head your company's delegation to negotiate a major expansion contract in Sao Paulo next month. While researching the other team's profile, you recognize their main negotiator as someone you've made successful deals with many times over. You get in touch with her and suggest that negotiations proceed according to mutually agreed terms as you go along."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 50,
    question: "'An adaptation strategy is only to be designed and implemented when one wants to please one's counterpart'. How do you react to this statement?",
    options: [
      "It is a negotiation where something has to be gained. No trick is off limit...",
      "We've known this country's negotiating style for a very long time...",
      "A cultural adaptation strategy implies first and foremost maintaining critical thinking on the issues at stake and paying attention to the relationship you want with your counterpart. It is always important to be careful and adaptive."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 51,
    question: "Preparing yourself for cross-cultural negotiations involves taking into account many steps and avoiding many traps. For the latter, being as clear a picture as can be about the decision-making process is an important asset. Based on your understanding of cultural profiling, in which of the following countries are you most likely to be facing a negotiator who will not be the actual final decision-maker:",
    options: [
      "Belgium, France and Germany: in Europe, negotiators are always the final bosses...",
      "China, Singapore and Korea: mainly collectivistic, these countries are very much driven by 'supreme leaders' who remains silent or absent during talks.",
      "Egypt, Lebanon and Jordan compose an ensemble of countries..."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 52,
    question: "In consensus-oriented cultures, negotiators will behave in which of the following ways:",
    options: [
      "They will deploy considerable effort to avoid entering into a conflict with their counterparts...",
      "They will look to create an internal consensus on which to base a final decision. It requires the lead negotiator to look for a lot of information to get his team agreed on a position. The process is long but the decision is sound and there is a low risk of internal defection.",
      "They will consult extensively, ask a lot of questions... decision is taken by the lead negotiator..."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 53,
    question: "In a third type of cultural setting, one finds agents who are characterized by a specific relationship of 'representation' to their principals. Which proposition best suits this idea:",
    options: [
      "Bottom-up: the negotiator is in charge of managing the deal...",
      "Horizontal deal-making: in this setting, the lead negotiator and his principal share...",
      "Delegated decision-making: the agent is actually a representative of the principal and has the formal authorization to speak on the group's behalf. The agent (who has some leeway) and the principal are in constant communication throughout the negotiation."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 54,
    question: "When negotiating internationally, a negotiator should identify and take into account specificities regarding the international framework of a negotiation, notably:",
    options: [
      "Behaviours at the negotiation table",
      "Values",
      "Personality",
      "Assumptions"
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 55,
    question: "Within European institutions, negotiations are constant. No decision can be the result of unilateral decisions, while consensus and procedural fairness are the norms. When negotiating with EU officials, what can you least expect?",
    options: [
      "Treachery, dishonesty and below-the-table tactics",
      "Intractable decision-making processes",
      "Bribery and corruption"
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 56,
    question: "The European Union is, as we write, 28 member strong, representing an internal market of more than 400 million customers. To apply the decisions reached by the European Parliament and the Council of Ministers, the European Commission is a 30,000 person corps (smaller than the US bureaucracy in Washington, in comparison). How would you best describe the negotiation style of these civil servants?",
    options: [
      "Consensus-driven",
      "Cooperative usually",
      "Are you sure you've paid attention to the previous chapters and lectures in this MOOC? Check your assumptions and prejudice and pay close attention to the person you negotiate with ; her background, her and her unit's interests in the subject, the political salience of the issue for the member-states..."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 57,
    question: "Above all, Chinese negotiators present a trait of character that can be destabilizing for their European counterparts. It is:",
    options: [
      "Its high context culture which implies that communication is indirect, replies are often understatements, with avoidance of open expressions of agreement and disagreement.",
      "The importance of gift-giving and entertainment as crucial aspects of the deal-making culture. Be ready to show your appreciation through pricy gifts and your commitment to making a deal through readiness to negotiate after 8pm.",
      "The reliance on non-committal tactics that add a layer of uncertainty when European negotiators attempt to report to their principals about the state of their negotiations in China."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 58,
    question: "'Guanxi', a Chinese term, most often translated as “relationship” is crucial for any negotiator attempting to enter into a business relationship in China. Building a strong relationship with a Chinese counterpart is best achieved by:",
    options: [
      "Taking into consideration how sensitive Chinese negotiators can be to their counterparts' effort to make their stay as comfortable and enjoyable as possible.",
      "Insisting on shaking hands as often as possible to show determination and honesty. A handshake, in China, is always a good indicator of the firmness of your position.",
      "Making a personal connection. Insisting on sharing personal family histories and getting to know the other negotiator's children, especially, will always be seen as a way to move a negotiation forward."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 59,
    question: "US Diplomats tends to present themselves and their negotiating habits as “tough but fair”. But how do other countries' diplomatic corps usually see them?",
    options: [
      "“tough but fair”: that's right. American diplomats play openly and very rarely resort to strong-arm tactics to get their way.",
      "“American interests first, the rest: second”. Used to global dominance in most areas, the USA has never been known to hesitate advocating and serving its own interests at the expense of other, less powerful nations.",
      "“a benevolent hegemony”: what is the point of being powerful and relying on unsurpassed power if it is not be a “beacon for the world”?"
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 60,
    question: "Which profession has had the most influence and impact on crafting the very particular style of US negotiators?",
    options: [
      "Blacksmith: while the issue is hot, hammer it with blunt force to shape it into what you want.",
      "Grape-pickers: one is best advised to pick grapes when they are ripest.",
      "Lawyers: negotiating means getting a deal and its complete details down on paper to prevent anyone from finding loopholes."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 61,
    question: "Time is a 'currency' one needs to understand to appreciate middle-eastern cultures. In this respect which skills would you need to develop in order to best advance your future negotiations on the eastern shores of the mediteranean?",
    options: [
      "Time management: a good negotiator always keeps time under control.",
      "Quality time: a good negotiator knows how to make time productive.",
      "Patience: “why are you running like this? Sit down, have coffee with me and let's talk a little before you have to go”."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 62,
    question: "Negotiations are seen as a personal investment where trust in the other negotiator is of the essence. As a consequence, negotiators commit their word, their 'face' in a sense, and would suffer a personal loss if they were to go back on their word. In such a context, what should you expect in building strong personal relationships?",
    options: [
      "Invest your personal time by accepting to stay a little longer after the meeting to exchange a few words.",
      "Allow your counterpart to ask personal questions about you and \"let him or her in\": allowing someone to get to know you more is a skill you need.",
      "Accept an invitation to a hammam from a business partner. Middle-eastern negotiators, like their Scandinavian counterparts, often share a bath in order to close a deal."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 63,
    question: "The 21st Conference of the Parties to the United Nations Convention on Climate Change took place in Paris in the fall of 2015. The main lessons of these negotiations for chief negotiators are:",
    options: [
      "Prepare seriously, know your counterparts, hear others' concerns and play on these concerns to push your agenda.",
      "Prepare thoroughly if you do not want to fail, build trust before you need it, listen actively to gather up information before you start negotiating, clarify your mandate and pace yourself in order to resist fatigue.",
      "Know your national interests, prepare the negotiations by knowing your adversary's weaknesses, exploit them and ensure that your own state's interests come first."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 64,
    question: "When it comes to advocating climate change measures, the whole world is concerned. The extent to which changes need to take place (in technology, policy, habits, means of development and production, transport and trade, to cite just a few areas) imposed negotiation seems the only means through which agreements can be built. Multilateral negotiations are best characterized by:",
    options: [
      "Their complexity: multilateral negotiations require exchanges between dozens, if not hundreds, of delegates on very complicated issues. Organization is fundamental.",
      "Their complexity: multilateral negotiations demand that the Chairperson works to organize a path to consensus and reduce the many different views and opinions to a few that can be discussed. Management is key.",
      "Their complexity: multilateral negotiations, such as the COPs, are carefully watched by hundreds of stakeholders, from industrial lobbies to environmental groups, to citizens and others. Inclusiveness of all opinions and management of transparency is essential."
    ],
    correctAnswers: [0, 1, 2],
    type: "multiple"
  },
  {
    id: 65,
    question: "Which of the following DO NOT apply to the definition of mediation?",
    options: [
      "Mediation is a process of dialogue",
      "Mediation is a process of negotiation",
      "The mediator works to achieve a fair deal for all parties",
      "The mediator facilitates the growth of improved mutual understanding between the parties",
      "The mediator will step out of his/her neutral stance if necessary."
    ],
    correctAnswers: [1, 4],
    type: "multiple"
  },
  {
    id: 66,
    question: "In general, the mediator aims at facilitating the emergence of a solution in a non-directive manner. However, he/she may resort to a directive approach when:",
    options: [
      "The mediator perceives the possible materialisation of a \"solution\" to a conflict with which they have become familiar.",
      "The mediator perceives that either one of the parties is deliberately blocking a solution through stalling tactics.",
      "The mediator perceives that one or both of the parties are beginning to resort to conflictual tactics to push through their goals."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 67,
    question: "Which of the following issues related to “interaction dynamics” justify the use of mediation?",
    options: [
      "The parties have little or no trust in each other.",
      "Communication is poor, thus generating mutual miscomprehension.",
      "Initial negotiation among the parties has given way to a wish to mediate.",
      "Values and assumptions are at loggerheads and neither party is able to comprehend those of the other."
    ],
    correctAnswers: [0, 1, 3],
    type: "multiple"
  },
  {
    id: 68,
    question: "Emotions may also be a reason for the use of mediation. Which of the following statements is FALSE concerning this topic?",
    options: [
      "Emotions between the parties may be so intense and negative that dialogue is itself distorted or destructive.",
      "The mediator's role will be to avoid these emotions in order to foster a non-aggressive atmosphere at the table.",
      "Some mediators will separate the parties in \"caucuses\" to explore the historical and psychological origins of these strong emotions.",
      "The mediator will allow for some controlled confrontation and expression of negative emotions."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 69,
    question: "Match up the following role a mediator plays with its description: \"Referee–watchdog\"",
    options: [
      "Especially the case in circumstances where s/he has substantial professional expertise and knowledge that may have a direct bearing on the mode of resolution and dispute",
      "Remind parties of the risks and costs of possible solutions, as well as their opportunities",
      "Regulate behaviours and avoid any excesses that can be unproductive or dysfunctional during the sessions.",
      "Help the parties find pathways to innovative perspectives and solutions."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 70,
    question: "Match up the following roles a mediator plays with its description: \"Leader and authority\"",
    options: [
      "Especially the case in circumstances where s/he has substantial professional expertise and knowledge that may have a direct bearing on the mode of resolution and dispute",
      "Remind parties of the risks and costs of possible solutions, as well as their opportunities",
      "Regulate behaviours and avoid any excesses that can be unproductive or dysfunctional during the sessions.",
      "Help the parties find pathways to innovative perspectives and solutions."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 71,
    question: "Match up the following roles a mediator plays with its description: \"Problem and resource explorer\"",
    options: [
      "Help the parties find pathways to innovative perspectives and solutions.",
      "Remind parties of the risks and costs of possible solutions, as well as their opportunities",
      "Regulate behaviours and avoid any excesses that can be unproductive or dysfunctional during the sessions.",
      "Especially the case in circumstances where s/he has substantial professional expertise and knowledge that may have a direct bearing on the mode of resolution and dispute"
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 72,
    question: "Which of the following DOES NOT apply to the description of the role of ‘Communicator-facilitator’ the mediator must play?",
    options: [
      "Guarantee in some way an equitable and balanced interaction between the parties.",
      "Use all his/her psychological skills to generate constructive communication.",
      "Help them transcend rigid or over-dogmatic positions.",
      "Break out of norms that inhibit the finding of creative solutions to problems."
    ],
    correctAnswers: [3],
    type: "single"
  },
  {
    id: 73,
    question: "What are the features which distinguish mediation from arbitration or a judiciary system?",
    options: [
      "Mediation is a voluntary process",
      "A deal will be found only if everybody agrees",
      "Parties may leave the mediation process any time",
      "Mediation is based on consensus",
      "Unlike judges or arbitrators, mediators do not decide in the end"
    ],
    correctAnswers: [0, 1, 2, 3, 4],
    type: "multiple"
  },
  {
    id: 74,
    question: "What is the definition of 'an inclusive agreement' in mediation terms?",
    options: [
      "An inclusive agreement in mediation terms is when all the dimensions of the conflict have been covered, innovative solutions have been put on the table, and the various parties have reached consensus on the selected solutions.",
      "An inclusive agreement in mediation terms is when all the dimensions of the conflict have been covered, innovative solutions have been put on the table, and the various stakeholders accept judgement on a solution offered by the mediator and agree to adopt it even if it is not necessarily 100% liked.",
      "An inclusive agreement in mediation terms is when various blocking points have been ceded by one or both parties in order for a majority of stakeholders to select a given solution endorsed and recommended by the mediator."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 75,
    question: "It is highly important to set the rules of the game before beginning the mediation. Which of the following IS NOT a rule that applies to mediation?",
    options: [
      "Full confidentiality of what is said in the sessions.",
      "No interruption, and mutual respect. You will give the floor.",
      "No emotions. Parties are to speak in a measured, respectful manner.",
      "Full deniability. Should any confidential information leak out of the room, the other party is perfectly allowed to deny it.",
      "Parties agree to commit to implement any agreement – keeping that in mind, by definition, there will be an agreement only if both parties agree."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 76,
    question: "Which of the following pieces of advice are valid regarding obtaining the commitment of both parties to the package of solutions?",
    options: [
      "Help the parties realize that these solutions are legitimate – even though they do not like them.",
      "Link justifications to the legal system, benchmarks or precedents.",
      "If blockage is encountered, foster trade-offs.",
      "Refrain from letting parties compare these solutions with those found away-from-the-table."
    ],
    correctAnswers: [0, 1, 2],
    type: "multiple"
  },
  {
    id: 77,
    question: "Preparing as a party for mediation involves going through a 3-point checklist. Is the following RIGHT or WRONG? First, what do you absolutely need to tell during the meeting? Second, what should you not tell during the meeting? Third, which questions would you like to ask?",
    options: ["Right", "Wrong"],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 78,
    question: "Which of the following statements are relevant to justify solutions that are put on the table?",
    options: [
      "This solution has a precedent in the industrial dispute of 2015 involving the car workers union and senior management at one of their site.",
      "This solution is understandably a right one to choose because it makes common sense.",
      "This solution is similar to that agreed upon in court following a case of harassment in the armed forces.",
      "This solution is obviously a fair one. If you don't agree on it, our talks will most probably break down.",
      "This solution is worth considering, especially if we compare it to the solution decided last year by the Manchester subsidiary."
    ],
    correctAnswers: [0, 2, 4],
    type: "multiple"
  },
  {
    id: 79,
    question: "As a mediator it is recommended to ask each party to send you, on a confidential basis, a short memo on the questions they would like to raise and which solutions they envisage. Why?",
    options: [
      "Such a memo will serve a key purpose: help both parties get prepared for the upcoming sessions.",
      "Such a memo will serve two purposes. One: provide you with both perspectives on the situation. Second, help both parties get prepared for the upcoming sessions.",
      "Such a memo will serve three purposes. One: provide you with both perspectives on the situation. Second, help both parties get prepared for the upcoming sessions. Third: increase the power of influence you have over persuading either of the two parties to accept the other's solution."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 80,
    question: "Which statement is WRONG?",
    options: [
      "In FACILITATIVE mediation, the mediator tries, in a low-profile way, to provide a minimal framework for meaningful communication between the parties.",
      "In the FORMULATIVE approach, the mediator turns into a leader, threatening or rewarding parties in order to get concessions until they accept the agreement. Here, purists would say this is no longer a genuine mediation."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 81,
    question: "Which statement is RIGHT?",
    options: [
      "In the MANIPULATIVE approach: the mediator turns into a leader, threatening or rewarding parties in order to get concessions until they accept the agreement. Here, purists would say this is no longer a genuine mediation.",
      "In DIRECTIVE mediation, the mediator turns into a leader, providing a minimal framework for meaningful communication between the parties."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 82,
    question: "As a working method, joint meetings are helpful when:",
    options: [
      "Parties need to settle an issue – such as the amount of a compensation – but do not need to fix a relationship in order to face a shared future",
      "A core objective of the mediation is to help both parties fix their relationship in order to keep on co-working together.",
      "Parties have reached a stalemate. Whenever parties refuse to move towards a possible deal it is essential to force them to come together, face to face, and directly explain the reasons why they do not wish to commit, in order to find a new solution."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 83,
    question: "The judicial process is based on transparency; the mediation process is based on confidentiality. Why?",
    options: [
      "Non-confidentiality exposes the parties and their conflict to the scrutiny of a wider audience, which can further deteriorate the situation",
      "Mediation creates a safe sphere of dialogue in which all parties may share all the information they have.",
      "Non-confidentiality – and therefore transparency to the outside – will not help solve the conflict in a mutually acceptable way",
      "Sharing more information will help parties go to the root causes of the conflict, and therefore address the situation in an effective manner."
    ],
    correctAnswers: [0, 1, 2, 3],
    type: "multiple"
  },
  {
    id: 84,
    question: "What advice is valid for closing the mediation?",
    options: [
      "Avoid rushing to conclusions in the end of the mediation cycle and wrap up things correctly",
      "Make sure there is no misunderstanding, and no missing point",
      "Take down the names of all those present and make them sign a presence sheet as proof of the validity for the agreement",
      "Clarify what has been agreed on, but also how this agreement will be implemented",
      "Remember to congratulate the parties for their productive involvement"
    ],
    correctAnswers: [0, 1, 3, 4],
    type: "multiple"
  },
  {
    id: 85,
    question: "“Inexperienced mediators fall into this trap because they think such rules are ‘childish’, or ‘unnecessary’...What classic mistake is this statement describing?",
    options: [
      "Letting your own interests influence the mediation",
      "Prematurely closing the mediation",
      "Failing to control the flow of information and expression",
      "Forgetting to set the ground rules"
    ],
    correctAnswers: [3],
    type: "single"
  },
  {
    id: 86,
    question: "The mediator may choose 3 working formats. Match up the working following format with the right statement: Separate meetings only: the mediator will meet with each party alone, sequentially.",
    options: [
      "In many cases, the perspective of being stuck in without a deal, proves less interesting for the parties than the compromise on the mediation table.",
      "Both parties need to vent something, with the other listening and acknowledging",
      "In day-to-day situations, this method is useful when parties need to settle an issue – such as the amount of a compensation – but do not need to fix a relationship in order to face a shared future."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 87,
    question: "The mediator may choose 3 working formats. Match up the working formats with the following statements: Joint meetings only: the mediator will systematically convene all parties together.",
    options: [
      "In many cases, the perspective of being stuck in without a deal, proves less interesting for the parties than the compromise on the mediation table.",
      "Both parties need to vent something, with the other listening and acknowledging",
      "In day-to-day situations, this method is useful when parties need to settle an issue – such as the amount of a compensation – but do not need to fix a relationship in order to face a shared future."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 88,
    question: "The mediator may choose 3 working formats. Match up the working formats with the following statements: A mix of both: the mediator will alternate plenary meetings and separate meetings.",
    options: [
      "In many cases, the perspective of being stuck in without a deal, proves less interesting for the parties than the compromise on the mediation table.",
      "Both parties need to vent something, with the other listening and acknowledging",
      "In day-to-day situations, this method is useful when parties need to settle an issue – such as the amount of a compensation – but do not need to fix a relationship in order to face a shared future."
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 89,
    question: "Professors Budd and Colvin propose a framework for assessing the dispute resolution process. It consists in 3 criteria:",
    options: [
      "Evaluation, equity and voice",
      "Efficiency, equity and voice",
      "Grudge, grievance and dispute",
      "Efficiency, evaluation and voice"
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 90,
    question: "What are the pros and cons of the different dispute procedures as assessed by Budd and Colvin’s framework? \"Joint management-union processes\"",
    options: [
      "These may be quick and cost-effective but lack accountability to employees and employee representatives",
      "These will usually have been negotiated beforehand and involve procedures which increase voice and accountability",
      "These score well in equity and defence of rights but can be slow, costly and relatively inefficient"
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 91,
    question: "What are the pros and cons of the different dispute procedures as assessed by Budd and Colvin’s framework? \"In-company HR or line manager procedures\"",
    options: [
      "These may be quick and cost-effective but lack accountability to employees and employee representatives",
      "These will usually have been negotiated beforehand and involve procedures which increase voice and accountability",
      "These score well in equity and defence of rights but can be slow, costly and relatively inefficient"
    ],
    correctAnswers: [0],
    type: "single"
  },
  {
    id: 92,
    question: "What are the pros and cons of the different dispute procedures as assessed by Budd and Colvin’s framework? \"Judicial procedures \"",
    options: [
      "These may be quick and cost-effective but lack accountability to employees and employee representatives",
      "These will usually have been negotiated beforehand and involve procedures which increase voice and accountability",
      "These score well in equity and defence of rights but can be slow, costly and relatively inefficient"
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 93,
    question: "The Settlement conference model of mediation aims at reaching an agreement or deal that will keep the parties away from litigation and the courts. As such, the role of the mediator changes – how?",
    options: [
      "His/her role requires non-interference and non-judgement and supposes easing the parties involved towards awareness of each other’s arguments and therefore readiness to find a win-win solution.",
      "His/her role requires being the representative of the company and its HR and legal teams to pass on an assessment before the company offers a solution.",
      "His/her role requires a more directive approach and style, negotiating for the parties within the constraints of the law and ultimately proposing solutions."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 94,
    question: "Mediation in the case of harassment at work requires special attention. Which of the following are valid?",
    options: [
      "Because of the weight of prejudice and bias, particularly in the domain of gender relations, where it is often unconscious, “mediator neutrality”; may require careful exploration and analysis, both before and after intervention",
      "Asymmetries of power between the two parties, and the possibility of strong influence on the process by a dominant party, both demand high levels of vigilance on the part of the mediator with regard to confidentiality, the inclusion and roles of advisors and the traps of manipulation",
      "Mediation in cases of harassment should only be of a formal, tightly controlled nature presided over by the HR director and a senior union official."
    ],
    correctAnswers: [0, 1],
    type: "multiple"
  },
  {
    id: 95,
    question: "Third-party involvement in an industrial relations dispute between unions and management can be extremely beneficial. What important role can mediation play?",
    options: [
      "Mediation avoids emotions becoming too extreme",
      "Third-party mediation is a way of judging the proposals coming from each side",
      "Mediation with a third-party eliminates strikes",
      "Mediation is less costly than both strike action and going through industrial tribunals and courts"
    ],
    correctAnswers: [3],
    type: "single"
  },
  {
    id: 96,
    question: "What major criteria must a mediator/conciliator possess to obtain legitimacy among management and union parties?",
    options: [
      "They must be known to each party",
      "They must be regarded as professionals",
      "They must be from the same organisation or firm",
      "They must be perceived as skilled and reliable",
      "They must be perceived as neutral"
    ],
    correctAnswers: [0, 1, 3, 4],
    type: "multiple"
  },
  {
    id: 97,
    question: "What is the correct definition of the 4-Step mediation model?",
    options: [
      "The goal is to maintain the relationship between parties while implementing a four-step process that involves 1) Inviting each party to explain their case 2) Inviting each party to see the issue from the other’s perspective 3) Requesting a reformulation of the parties initial case explanation and 4) Inviting both parties to propose solutions and find agreement.",
      "The goal is to reach an agreement or deal that will keep the parties away from litigation and the courts. Here the mediator may be rather more directive in approach and style, and is really trying to “negotiate for the parties”, with the constraints of law in mind.",
      "The goal is to maintain the relationship between the parties while initiating a process of dialogue between them that can generate a solution which they feel they can “own”. This is close to the mediation “facilitator-communicator” role."
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 98,
    question: "To what negotiation model does the following statement refer to? ‘In the first two steps the mediator encourages each party to freely “tell their story” without intervention from the other. The mediator practices active listening and rephrasing (or “looping” and elicits the deeper interests and needs of each party in turn’",
    options: [
      "The Settlement conference model",
      "4-Step mediation model"
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 99,
    question: "The neutrality of any third party is a crucial issue for industrial dispute negotiations. Why?",
    options: [
      "Both parties are initially distrustful of any third party being integrated to the negotiations",
      "Unions are concerned about management specialists wanting to dominate procedures and to channel actions towards outcomes favourable to them",
      "Management believes that third parties usually favor employees over the company’s interests",
      "Unions see third parties as a way for management to keep its distance and to avoid direct negotiation",
      "Unions will often fear being by-passed or co-opted by a process where, at the end of the day, employees are poorly represented"
    ],
    correctAnswers: [0, 1, 2, 3, 4],
    type: "multiple"
  },
  {
    id: 100,
    question: "Which of the following industrial disputes would NOT be resolved by referring to national laws and sector- specific/workplace agreements?",
    options: [
      "In the case of a performance appraisal and a complaint on ‘management bias’ from the employee",
      "Dispute between teams and stakeholders within the company on prioritizing deadlines for a project",
      "A labour dispute between rail workers and management over pay and a lightning strike that train drivers threaten to carry out if their demands are not met."
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 101,
    question: "What's the best strategy to take when you feel there's going to be no deal?",
    options: [
      "Step back and analyse the situation to effectively understand why there's no deal.",
      "Adopt an aggressive, competitive style of negotiating to force the other negotiator to weaken resistance to your proposals."
    ],
    correctAnswers: [0],
    type: "single"
  },
   {
    id: 102,
    question: "Among the following statements, which is (are) not pitfalls in negotiation?",
    options: [
      "Absence of a learning cycle",
      "Negomania",
      "Justifications of solutions",
      "Positionalism",
      "Multiple solutions"
    ],
    correctAnswers: [2, 4],
    type: "multiple"
  },
  {
    id: 103,
    question: "What typical assumptions can be found among negotiators?",
    options: [
      "We naturally assume that negotiating is all about brain rather than brawn",
      "We naturally tend to underestimate the other side at the table.",
      "We always tend to assume that the other side is stronger than us.",
      "We naturally tend to think that negotiation is only, and always, pure competition and that the objective is to win against the other.",
    ],
    correctAnswers: [1, 4],
    type: "multiple"
  },
  {
    id: 104,
    question: "Many people believe that negotiation is only, and always, about concession-making, thinking that it can only be a “zero-sum game”: “What he wins, I must lose”, and vice versa. The reality is quite different. How?",
    options: [
      "No concessions should be made. Like this, the negotiators do not fall into the trap of believing they must lose something in order to win something.",
      "Negotiation can help you create value without the obligation to take it from the other, but create it with the support of the other because there is a notion of reciprocity.",
      "Negotiation is always about concessions because there are naturally stronger and weaker negotiators at the table in any deal.",
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 105,
    question: "'Business is business!' This attitude invariably leads to rejection of a deal. Why?",
    options: [
      "The proposal stems from of a process in which they felt respected, had a say, could voice their concerns.",
      "The proposal stems from a process characterised by use of force, impoliteness, competition, and which they felt uncomfortable with.",
      "The proposal stems from talks which are only centred on the financial aspect of a deal not the logistical or after-sales follow up.",
    ],
    correctAnswers: [1],
    type: "single"
  },
  {
    id: 106,
    question: "'Which mindset most defines a positive negotiating approach?",
    options: [
      "Hard on the problem, hard on people",
      "Soft on the problem, hard on people",
      "Hard on the problem, soft on people",
      "Soft on people, soft on the problem",
    ],
    correctAnswers: [2],
    type: "single"
  },
  {
    id: 107,
    question: "Among the following elements, which are the ones that are not part of the 10-trump plan for preparation?",
    options: [
      "Vertical relationships",
      "Logistics",
      "Communication",
      "Justifications away from the table",
      "Positions",
    ],
    correctAnswers: [3, 4],
    type: "multiple"
  },
  {
   id: 108,
   question: "For the dimension 'Who' (People) to be prepared in negotiation, which of the following are key trumps?",
   options: [
     "The mandate",
     "Solutions under the table",
     "Interpersonal relationships",
     "Stakeholders' map",
     "Personal motivations",
   ],
   correctAnswers: [0, 2, 3],
   type: "multiple"
  },
  {
   id: 109,
   question: "Justifications are most convincing if they are:",
   options: [
     "Based on a precedent",
     "Based on emotions",
     "Based on benchmarks and statistics",
     "Based on the law",
     "Based on relationships",
   ],
   correctAnswers: [0, 2, 3],
   type: "multiple"
  },
  {
   id: 110,
   question: "In the case of excess demands, what is the solution?",
   options: [
     "Plan better and anticipate deadlines.",
     "Back up demands with objective justifications using benchmarks and facts.",
     "Counter these demands with your own excess demands to test your opponent.",
   ],
   correctAnswers: [1],
   type: "single"
  },
    {
   id: 110,
   question: "You notice that the lighting is poor and the noise from outside is making things difficult to follow. What do you do?",
   options: [
     "Ask people to begin speaking loudly, even if it means shouting.",
     "Postpone the meeting until another day.",
     "Take the logistics seriously. Stop proceedings, find a better place and book a new room.",
   ],
   correctAnswers: [2],
   type: "single"
  },
   {
   id: 111,
   question: "When preparing your process, which one of the following is not one of the classifications of motivations you should take into account?",
   options: [
     "Motivations shared by both parties and compatible between them.",
     "Motivations that are different, contradictory or even mutually exclusive.",
     "Motivations that are contradictory to the win-win mindset of the negotiation.",
     "Motivations that are different but compatible or complementary.",
   ],
   correctAnswers: [2],
   type: "single"
  },
  {
   id: 112,
   question: "Among the following statements, which are correct in negotiation?",
   options: [
     "In negotiation, you should know how to evaluate before deciding.",
     "The essential is to speak well first and then to listen.",
     "Creating value before sharing it.",
     "Negotiation is an innate skill.",
     "What you should do first is the obvious.",
   ],
   correctAnswers: [0, 2],
   type: "multiple"
  },
  {
   id: 113,
   question: "A negotiation does not imply an agreement. You therefore have to check the dimensions of the negotiation before commitment. In the 'Problem' dimension, which of the following statements is wrong?",
   options: [
     "Check that the agreement integrates the motivations of the different parties.",
     "Check that it is less interesting than the best solution away from the table.",
     "Check that solutions at the table create as much value as possible.",
     "Check that the organization clearly determines the execution steps.",
   ],
   correctAnswers: [1],
   type: "single"
  },
  {
   id: 114,
   question: "Negotiating is communicating. A golden rule to keep in mind before beginning any communication in a negotiation is:",
   options: [
     "The message you intend to send is not necessarily that which is perceived by the receiver.",
     "The message you intend to send must be transmitted in a clear and precise voice.",
     "The message you decide to transmit is not necessarily perceived as an intended message.",
   ],
   correctAnswers: [0],
   type: "single"
  },
  {
   id: 115,
   question: "When you begin to plan what coalitions you might build in the negotiation, which two angles should you take into account?",
   options: [
     "Which partners are strongly or weakly in agreement with your objectives?",
     "What is the quality of the existing trust/relationship?",
     "Which partners are my obvious friends and which are my obvious foes?",
     "Which partners are strongest at the table?",
   ],
   correctAnswers: [0, 1],
   type: "multiple"
  },
  {
   id: 116,
   question: "Which statement is right?",
   options: [
     "In an age of globalization, “culture” has become a vestige of the past that is expressed most clearly in areas such as national cuisine and traditional costume. Other than that, we all belong to a mostly globalized culture.",
     "When negotiating with someone from a different culture, I have to pay attention to the various ways in which my interlocutor conveys what he or she thinks of his/her positions.",
   ],
   correctAnswers: [1],
   type: "single"
  },
  {
   id: 117,
   question: "Which of these statements are true?",
   options: [
     "Spanish negotiators from the IMF have an advantage over Indian negotiators working for the UN.",
     "A negotiator's style is mostly influenced by his professional occupation.",
     "A 'typical Chinese' negotiator is a stereotype that a trained negotiator avoids carefully.",
     "We resort to visible cultural traits to summarize an individual, and most of the time, Brazilians behave like Brazilians.",
   ],
   correctAnswers: [1, 2],
   type: "multiple"
  },
  {
   id: 118,
   question: "Based on your understanding of Dr Hofstede’s profiling of cultures, what is to you the correct definition of his “power distance index”?",
   options: [
     "The PDI is a measurement, across different cultures, of the distance with which members of a society are comfortable based on their hierarchical position.",
     "The PDI accounts for the way in which members within a given society accept and expect power and authority to be distributed and therefore how decisions are made.",
     "The PDI indicates how much hierarchy weighs in the decision-making process. When the PDI is low, hierarchy predominates as the ultimate criterion for making a decision.",
   ],
   correctAnswers: [1],
   type: "single"
  },
  {
   id: 119,
   question: "Hofstede’s view of cultural classification criteria enables students of cross-cultural negotiations to get a deeper understanding of what shapes a foreign negotiator’s preferences, tactics and sets of attitudes at the table. When one looks ‘under the water level of the iceberg of culture’, one can discover the hidden complexities of culture. Among the following statements, which ones ring true to you ?",
   options: [
     "You win, you lose, that’s life. Members of Chinese and American cultures do not mind taking risks because they have a very short term view and do not consider the future or the past to be important.",
     "Culturally-expressed preferences can come from radically different historical sources: for instance, Chinese and American cultures tend to display a low risk aversion level. In China, it may stem from the collective nature of agricultural work which required a system of ‘solidarity’ to manage certain risks. In America, the low risk aversion level may come from an ethic of belief in oneself and in second chances.",
     "France is a relatively risk-averse society. The French rely on planning to avoid risks and have developed a system of “risk prevention” embodied in an elaborate system of social welfare. Its culture is thus expressed in a very visible social institution.",
   ],
   correctAnswers: [1, 2],
   type: "multiple"
  },
  {
   id: 120,
   question: "Choose the statement that best describes what Earley means by 'the physical element of cultural intelligence'.",
   options: [
     "Cultures are expressed through a set of shared verbal and nonverbal signifiers through which a group of people communicate. Therefore, cultural intelligence implies a high degree of familiarity with verbal and nonverbal means of transmitting information.",
     "It means the capacity to survive in any environment by adopting the habits of locals.",
     "Adopting a traditional dress code can be understood as showing very high physical cultural intelligence.",
   ],
   correctAnswers: [0],
   type: "single"
  },
  {
   id: 121,
   question: "Someone with high cultural intelligence would be best described by which of the following statements:",
   options: [
     "Someone with a sharpened cultural intelligence is able to suspend his judgement and analyse a behavior or interaction to determine whether it depends on personalities, a specific group trait or more largely a group’s cultural attributes.",
     "An individual who is able to understand and be understood in various cultural settings.",
     "A man or woman who has studied extensively how to negotiate and have his/her point accepted by others.",
   ],
   correctAnswers: [0],
   type: "single"
  },
  {
   id: 122,
   question: "What use does a negotiator have for cultural intelligence in a culturally-different setting?",
   options: [
     "Knowledge is power: impress your counterpart by telling them you’ve been to his country.",
     "It will provide much needed help in carefully assessing your negotiation strategy and sequencing, based on your understanding of your counterpart’s cultural profile. You’ll avoid obvious mistakes that can ruin first impressions.",
     "It provides a basis for increased self-confidence, which will come in handy when getting to the hardest part of the negotiation on financial obligations.",
   ],
   correctAnswers: [1],
   type: "single"
  },
  {
   id: 123,
   question: "Negotiators from monochronic cultures tend to:",
   options: [
     "Be comfortable with a high flow of information.",
     "Rely on specific, detailed and explicit communication.",
     "Take breaks when it seems appropriate.",
   ],
   correctAnswers: [1],
   type: "single"
  },
  {
   id: 124,
   question: "What should a negotiator do when negotiating with polychronic negotiators?",
   options: [
     "Taking time commitments seriously.",
     "Spending time getting acquainted with the other party.",
     "Paying a lot of attention to the agenda of a negotiation.",
     "Building long-term relationships.",
   ],
   correctAnswers: [1, 3],
   type: "multiple"
  },
  {
   id: 125,
   question: "When preparing for your next negotiation with a negotiator from a culture, a priori different from yours, what would you be well-advised to do?",
   options: [
     "Read-up on his or her national culture to sound sensitive. Are you certain you’re up-to-date on his/her country’s main traits?",
     "Check yourself: what do you think a typical individual from his/her culture would be like? Are you certain your assumptions are correct?",
     "Work on your notes, know your file, rehearse your arguments. A negotiator is a negotiator after all.",
   ],
   correctAnswers: [1],
   type: "single"
  },
  {
   id: 126,
   question: "Images and reality can sometimes suffer when they meet each other. You’ve been getting ready for this negotiation with your Japanese counterparts for a long time. You even followed specific training on “how to negotiate in Asia” at ESSEC. But, after a last minute check, your strategy has to be reassessed. What type of news derailed your well-thought plan?",
   options: [
     "Your Japanese counterpart’s company was just acquired by another japanese challenger.",
     "You checked each of your counterpart’s team members’ profile on a professional social network and realized that each of them attended a business school in France and graduated last year.",
     "You were about to forget your preparation notes on your desk",
   ],
   correctAnswers: [1],
   type: "single"
  },
];
