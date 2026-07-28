const questionBank = [
  {
    id: 1,
    question: "Câu 1: In preparing for your negotiation, objectives and interests must be taken into account. However, what are the two potential pitfalls in these?",
    options: [
      "A. Objectives are not so \"objective\" because they tend to include a sizeable amount of subjectivity.",
      "B. Objectives - what to aim for - may be mistaken for strategy - how to get there.",
      "C. Most negotiation stakes are not simply about the maximization of quantitative interests by rational individuals.",
      "D. Interests may not be in line with a negotiator's motivations."
    ],
    correct: [0, 2]
  },
  {
    id: 2,
    question: "Câu 2: Two key questions should be asked when analyzing the problem dimension. Which of the following are the correct questions?",
    options: [
      "A. How can I motivate myself to set the right objectives?",
      "B. Deep inside, which motivations do I try to fulfill through negotiation - I want X, but why do I want X?",
      "C. What do I know about the motivations of the other negotiator across the table - why do they ask what they ask?",
      "D. To what extent do we have common interests, which we do not need to discuss ?"
    ],
    correct: [1, 2]
  },
  {
    id: 3,
    question: "Câu 3: What is the difference between motivations and the mandate? Which two statements are correct?",
    options: [
      "A. The motivation is: I'd like to go as far as possible in that direction.",
      "B. The motivation is: I'd like to get the best possible result in order to earn recognition from my agent.",
      "C. The mandate is: my boss expects I go at least that far, and I must absolutely not step over this red line.",
      "D. The mandate is: my boss sets me a bottom-line set of objectives and expects me to give it that extra bit of energy and commitment to obtain more than what was expected."
    ],
    correct: [0, 2]
  },
  {
    id: 4,
    question: "Câu 4: For the tactical preparation of a negotiation, three questions should be asked: Which package of solutions should I put first on the table, in order to anchor the ............. around it? Which ............. should I have in mind? Which ............. to add to the table, or remove? And the same on their side; What is the ultimate ............. you will throw on the table if need be and only if need be. Which following word progression fits with the above statements?",
    options: [
      "A. Discussion, objective, solution, bargaining chip",
      "B. Trade off, position, mandate, threat",
      "C. Concession, concession, solution, solution",
      "D. Discussion, concession path, solution, bargaining chip"
    ],
    correct: [3]
  },
  {
    id: 5,
    question: "Câu 5: There are three ways a solution will be accepted by the other side. Which of the following constitute the three?",
    options: [
      "A. The solution is mutually satisfactory. It is in line with your motivation, but also with theirs.",
      "B. Identify, on another item of the negotiation, a solution which they want, but which you do not like. Then agree on a trade-off.",
      "C. Use a carrot and stick approach, blended with respect and politeness, to offer solutions and highlight the risks and threats if they do not accept.",
      "D. Convince the other negotiators by building a demonstration using objective points of reference (justifications) which are difficult to deny."
    ],
    correct: [0, 1, 3]
  },
  {
    id: 6,
    question: "Câu 6: Good negotiations will include two of the following. Which?",
    options: [
      "A. A unique solution that fits everyone's needs.",
      "B. A package deal solution addressing as many variables as possible.",
      "C. A logical, proven set of standard solutions.",
      "D. Creative, value-driven solutions that can be traded for mutual satisfaction."
    ],
    correct: [1, 3]
  },
  {
    id: 7,
    question: "Câu 7: As a negotiator, you must try and trade solutions which do not cost you a lot, but bring value to the other side of the table; AND get, by way of reciprocity, solutions which bring a lot of value to you but do not cost too much to the other side.",
    options: [
      "A. True",
      "B. False"
    ],
    correct: [0]
  },
  {
    id: 8,
    question: "Câu 8: Using justifications are powerful in that they:",
    options: [
      "A. Enable you to refuse the other's solution, not because \"you do not like it\" (although that may be the case), but because there is a legitimate reason to take it off the table.",
      "B. Provide \"destabilizing arguments\" that allow you to score psychological points over the adversary and sap their energy to resist your solution.",
      "C. Help you maintain the relationship with the other side: \"I'm not saying no, but facts X and Y justify that we do not include this option in the deal\".",
      "D. Provide a springboard for exploring other, legitimately anchored solutions."
    ],
    correct: [0, 2, 3]
  },
  {
    id: 9,
    question: "Câu 9: Personal relationships between the people at the table are crucial to the success of a negotiation. Match the following situations with the step : \"You will negotiate with someone you're never met before\"",
    options: [
      "A. Providing explanations or even an apology for whatever happened, bringing a small gift, could help mend the relationship. If you suspect that the situation is worse, then it is in your own interest to consider swapping your role for a colleague or, as a last option, bringing a third party between the two negotiators, to act as a go-between.",
      "B. Be aware that your own perceptions might be biased because of assumptions, clichés or stereotypes. Show benevolence and grant the benefit of the doubt. Make sure you have enough time to introduce each other. Build a minimum working relationship before entering the substance.",
      "C. You've established rapport, you trust each other, and your relationship is one of respect. Check this again and if it is indeed the case, then you may move on rapidly to negotiating."
    ],
    correct: [1]
  },
  {
    id: 10,
    question: "Câu 10: Now match the following situations with the step : \"You already know the person you are going to negotiate with\"",
    options: [
      "A. Providing explanations or even an apology for whatever happened, bringing a small gift, could help mend the relationship. If you suspect that the situation is worse, then it is in your own interest to consider swapping your role for a colleague or, as a last option, bringing a third party between the two negotiators, to act as a go-between.",
      "B. Be aware that your own perceptions might be biased because of assumptions, clichés or stereotypes. Show benevolence and grant the benefit of the doubt. Make sure you have enough time to introduce each other. Build a minimum working relationship before entering the substance.",
      "C. You've established rapport, you trust each other, and your relationship is one of respect. Check this again and if it is indeed the case, then you may move on rapidly to negotiating."
    ],
    correct: [2]
  },
  {
    id: 11,
    question: "Câu 11: Last, match the following situations with the step : \"You've already met the person before but there was a problem and this affected your relationship.\"",
    options: [
      "A. Providing explanations or even an apology for whatever happened, bringing a small gift, could help mend the relationship. If you suspect that the situation is worse, then it is in your own interest to consider swapping your role for a colleague or, as a last option, bringing a third party between the two negotiators, to act as a go-between.",
      "B. Be aware that your own perceptions might be biased because of assumptions, clichés or stereotypes. Show benevolence and grant the benefit of the doubt. Make sure you have enough time to introduce each other. Build a minimum working relationship before entering the substance.",
      "C. You've established rapport, you trust each other, and your relationship is one of respect. Check this again and if it is indeed the case, then you may move on rapidly to negotiating."
    ],
    correct: [0]
  },
  {
    id: 12,
    question: "Câu 12: Most negotiations on behalf of a mandate follow a 3-step process. Which ONE of the following IS NOT one of these steps?",
    options: [
      "A. Getting instructions from your boss.",
      "B. Negotiating at the table while respecting the mandate",
      "C. Proposal, counter-proposal, agreement.",
      "D. Returning to the boss and explaining what happened."
    ],
    correct: [2]
  },
  {
    id: 13,
    question: "Câu 13: A “right” mandate is one which is…",
    options: [
      "A. Clear on motivations, objectives, priorities and reasonably flexible on possible solutions.",
      "B. Clear on the purpose, strict on possible solutions, and firm on your position."
    ],
    correct: [0]
  },
  {
    id: 14,
    question: "Câu 14: \"Better no deal, than a deal outside your mandate.\" What mistake does the negotiator make for this statement to arise?",
    options: [
      "A. The negotiator made an initial error of judgement when deciding on the mandate with his/her superior.",
      "B. The negotiator wanted the deal so badly that he/she overstepped the mandate to achieve this."
    ],
    correct: [1]
  },
  {
    id: 15,
    question: "Câu 15: What can a negotiator do if a new, unexpected element enters the negotiation?",
    options: [
      "A. Call for a break in the negotiation – even if a for two minutes – check with your boss (via email, mobile or text message and update the mandate as required.",
      "B. Keep calm and carry on - nothing must deviate the negotiator from his/her goals.",
      "C. Make note of the unexpected element and prepare to follow this up after the negotiation with a demand to the other participants to meet again to discuss the new element."
    ],
    correct: [0]
  },
  {
    id: 16,
    question: "Câu 16: If a negotiator doesn't agree on the mandate, then this will have an effect on the motivation to negotiate effectively. Settle this aspect before the negotiation takes place by returning to the mandate and requesting modification or try to be replaced by a colleague.",
    options: [
      "A. True",
      "B. False"
    ],
    correct: [0]
  },
  {
    id: 17,
    question: "Câu 17: Three initial reasons for a mandate overstepping its scope are lack of preparation, lack of understanding and an unclear mandate. What preventive action is NOT required among the following?",
    options: [
      "A. Prepare, prepare, prepare.",
      "B. Ask for advice beforehand.",
      "C. Get everyone’s name correct.",
      "D. Specify what needs to be clarified in the mandate."
    ],
    correct: [2]
  },
  {
    id: 18,
    question: "Câu 18: What action should you take if your Principal (boss) gives you a free hand for the negotiating mandate?",
    options: [
      "A. Draft your own mandate, send it to your boss for sign off and state (politely) that suggestions are welcome.",
      "B. Thank him/her, draft your own mandate, execute it and then report back to your boss."
    ],
    correct: [0]
  },
  {
    id: 19,
    question: "Câu 19: During the negotiation, don't forget the limits of your mandate. Once back from the negotiation, be prepared to ........................your boss.",
    options: [
      "A. Tell",
      "B. Convince",
      "C. Hide it from"
    ],
    correct: [1]
  },
  {
    id: 20,
    question: "Câu 20: What duty should a negotiator remind him/herself of when under high pressure from the other side to agree to something?",
    options: [
      "A. The job of a negotiator is to say \"Yes\" if it means keeping long-term relations healthy.",
      "B. The job of a negotiator is to use diplomacy in order to reduce the effect of the pressure upon him/her.",
      "C. The job of a negotiator is to say \"No\" if need be."
    ],
    correct: [2]
  },
  {
    id: 21,
    question: "Câu 21: If the negotiator (agent) finds the mandate given by his/her boss (the principal) unrealistic, the negotiator should return to the mandate initially provided and negotiate the points he/she feels require modification.",
    options: [
      "A. True",
      "B. False"
    ],
    correct: [0]
  },
  {
    id: 22,
    question: "Câu 22: What is the definition of a ZOPA?",
    options: [
      "A. Zone of Operational Personal Agreement.",
      "B. Zone of Possible Agreements.",
      "C. Zone of Perspectives on Action."
    ],
    correct: [1]
  },
  {
    id: 23,
    question: "Câu 23: Which of the following IS NOT a reason for the absence of a ZOPA?",
    options: [
      "A. Mandates from each side do not overlap – there is no common ground for win-win.",
      "B. Motivations from each side may be strictly at odds.",
      "C. Some stakeholders are absent from discussions.",
      "D. Each party's Plan B (Solution Away from the Table) may be better than the solutions proposed at the table."
    ],
    correct: [2]
  },
  {
    id: 24,
    question: "Câu 24: Which of the following are reasons for failure in negotiations? (Select all that apply)",
    options: [
      "A. The trap of the gorilla syndrome – the negotiators try to over-impress each other.",
      "B. The negotiators are hard on the problem, soft on people.",
      "C. Negotiators start with excessive demands which cannot be met.",
      "D. The plan B has been underestimated."
    ],
    correct: [0, 2]
  },
  {
    id: 25,
    question: "Câu 25: A negotiation isn't a binary “deal, no deal” process. Which of the following ISN'T one of the the usual steps involved in reaching a final agreement?",
    options: [
      "A. Agreement to meet again.",
      "B. Agreement on the disagreement.",
      "C. Contingent agreements.",
      "D. Avoidance of factors that can jeopardize an agreement."
    ],
    correct: [3]
  },
  {
    id: 26,
    question: "Câu 26: Among the following statements, which are correct in negotiation?",
    options: [
      "A. You should speak first, and listen afterwards.",
      "B. Do not focus on positions.",
      "C. In negotiation you need to claim value first.",
      "D. Separate the people from the problem.",
      "E. Use subjective criteria."
    ],
    correct: [1, 3]
  },
  {
    id: 27,
    question: "Câu 27: Which of the following features do not help build effective communication?",
    options: [
      "A. Closed questions.",
      "B. Empathy.",
      "C. Background information.",
      "D. Active listening.",
      "E. Aggressiveness."
    ],
    correct: [0, 4]
  },
  {
    id: 28,
    question: "Câu 28: Which of the following statements are obstacles to negotiation success?",
    options: [
      "A. Positional bargaining.",
      "B. Joint problem solving.",
      "C. Value creation.",
      "D. No criteria of legitimacy for options.",
      "E. Being tough on the problem."
    ],
    correct: [0, 3]
  },
  {
    id: 29,
    question: "Câu 29: Among the following statements, which are correct in negotiation?",
    options: [
      "A. You need to anticipate the possible conflicts of interests between principals and agents.",
      "B. You should speak first, and listen afterwards.",
      "C. You should claim value and distribute it afterwards.",
      "D. The objective of a negotiation is to get an agreement.",
      "E. What we should do first things first in negotiation is the essential.",
      "F. Everything can be negotiated."
    ],
    correct: [0, 4]
  },
  {
    id: 30,
    question: "Câu 30: Among the following recommendations, which ones seem relevant to you?",
    options: [
      "A. Separate people issues from substantive issues.",
      "B. Focus on positions and not on interests or motivations.",
      "C. Consider negotiation as a zero-sum game.",
      "D. Anchor on justification criteria to settle a conflict.",
      "E. Identify the best solution away from the table before negotiating.",
      "F. Always end a negotiation with an agreement and accept it."
    ],
    correct: [0, 3, 4]
  },
  {
    id: 31,
    question: "Câu 31: In the following 10-trump preparation plan, match up the item “Who?” to its appropriate dimension.",
    options: [
      "A. Core motivations, Solutions at the table, Solutions Away From the table, Justifications.",
      "B. Organization, Communication, Logistics.",
      "C. Personal relationships, Mandate, Stakeholder’s Map."
    ],
    correct: [2]
  },
  {
    id: 32,
    question: "Câu 32: In the following 10-trump preparation plan, match up the item “What?” to its appropriate dimension.",
    options: [
      "A. Core motivations, Solutions at the table, Solutions Away From the table, Justifications.",
      "B. Organization, Communication, Logistics.",
      "C. Personal relationships, Mandate, Stakeholder’s Map."
    ],
    correct: [0]
  },
  {
    id: 33,
    question: "Câu 33: In the following 10-trump preparation plan, match up the item “How?” to its appropriate dimension.",
    options: [
      "A. Core motivations, Solutions at the table, Solutions Away From the table, Justifications.",
      "B. Organization, Communication, Logistics.",
      "C. Personal relationships, Mandate, Stakeholder’s Map."
    ],
    correct: [1]
  },
  {
    id: 34,
    question: "Câu 34: Which of the following ARE NOT bargaining tactics that you may be confronted with by your opposites at the table?",
    options: [
      "A. Linkage",
      "B. Extreme anchoring",
      "C. Carpet selling",
      "D. Red herring",
      "E. White elephant",
      "F. Good cop/bad cop",
      "G. My hands are tied",
      "H. My lips are sealed",
      "I. The \"icing on the cake\""
    ],
    correct: [2, 4, 7]
  },
  {
    id: 35,
    question: "Câu 35: Among the actions listed below, which one should you take when faced with the \"ultimatum\" tactic your opposite might use?",
    options: [
      "A. Re-orient your opposite to the points you had initially agreed to discuss or gain time in order to assess the meaning and cost of the new item on the agenda.",
      "B. First, resist hasty reaction and instead compare with your best solution away from the table. Next, thank your opposite for the offer and then propose a higher figure than your Plan B, as your own \"last offer\".",
      "C. Remain calm and do not give way to pressure, do not mix the People and the Problem. Stick to the facts and insist on rules of the game. Finally, if your plan “B”’ enables it, leave the room in the first meeting."
    ],
    correct: [2]
  },
  {
    id: 36,
    question: "Câu 36: In a negotiation it is crucial to have effectively prepared your Solution Away From the Table (SAFT) Why? Select the right answers among those below.",
    options: [
      "A. It will enable you to make a deal only if the solutions traded at the table are more interesting than the solution away from the table.",
      "B. It will enable you to make a comparison between what seems to be disappointing solutions at the table with the reality you will be faced with when leaving the room without a deal.",
      "C. It will enable you to set discussions with your opposite into motion again by talking about the “what if there was no deal? What will we do?” scenario.",
      "D. It provides the main ingredient for the power balance around the table and will enable you, if you have a comfortable SAFT, to be stronger in your demands at the table because the other negotiator will have to match your expectations.",
      "E. Once effectively prepared, it will enable you to fine-tune and adjust your mandate to the various interests of the stakeholders around the table, thus generating the best possible scenario for a mutually agreed solution even if you do not reach your principal’s expectations."
    ],
    correct: [0, 1, 2, 3]
  },
  {
    id: 37,
    question: "Câu 37: An international negotiator with a low context culture:",
    options: [
      "A. Insists on addressing counterparts by their titles.",
      "B. Avoids personal anecdotes, and refrains from questions regarding private and family aspects of his/her counterpart.",
      "C. Tries to start the discussion on a first-name basis."
    ],
    correct: [2]
  },
  {
    id: 38,
    question: "Câu 38: Given your knowledge of the typologies of cultures, when meeting for the first time with your Italian counterparts to discuss the terms of a possible deal, you make a note to pay close attention to:",
    options: [
      "A. Using your Italian dictionary to greet them in their language.",
      "B. Leaving aside enough time for greetings and small talk to gather as much information as possible.",
      "C. Not let them control the exchange. They talk a lot so you have to structure the discussion.",
      "D. Let them speak and always make sure to ask complementary questions and then rephrase to clarify your understanding before moving on."
    ],
    correct: [1]
  },
  {
    id: 39,
    question: "Câu 39: You've been designated by your principal to lead the company's team for next month's client meeting in Houston, Texas. The US is a new territory to you, after being posted in Latin America for 10 years. You expect the discussions to be:",
    options: [
      "A. Easy going, with all cards on the table and a quick look over the details of the new contract. We are partners, the implementation will go smoothly.",
      "B. Friendly and direct at first and then a full-blown argument over the financial aspects of the deal. Ultimately, what's not written down in the deal does not exist.",
      "C. Tough. Americans have a reputation for being sharks in business suits. I'd be well-informed to keep as much information from them and keep an ace or two up my sleeve when time comes to hash out the distribution of the expected profits."
    ],
    correct: [1]
  },
  {
    id: 40,
    question: "Câu 40: When a negotiator from a ‘high-context’ culture meets his counterpart from a ‘low context’ culture, who is more at risk of being faced with harsh difficulties?",
    options: [
      "A. The negotiator from the low context culture, because his very transparent style of communication, his expectation of a full exchange of information and his reliance on fact-based justification will be at odds with his high context culture counterpart.",
      "B. The negotiator from the high context culture, because he will be forced to reveal more information than he feels comfortable with, to make written commitments and adopt a quick style of making deals that are all in conflict with his cultural habits.",
      "C. Neither of them. indeed, aside from being from cultural backgrounds that are different, both of them developed professionally in a global company with its own internal culture. They will find common ground to negotiate this deal without a glitch."
    ],
    correct: [1]
  },
  {
    id: 41,
    question: "Câu 41: Through non verbal expressions, one will express, among other things, an attitude toward his or her interlocutor. Among the following propositions, which one is most accurate?",
    options: [
      "A. In African cultures, a younger negotiator will often show respect to someone considered older by letting him/her speak while avoiding direct and intense eye contact.",
      "B. In Western cultures, which are mainly low-context, direct eye contact at the beginning of the meeting is enough. One does not need, afterwards, to insist on locking gazes to appear respectful.",
      "C. Looking directly into your counterpart's face and making physical contact is considered the best way to appear sincere in the US. It shows you do not hesitate."
    ],
    correct: [0]
  },
  {
    id: 42,
    question: "Câu 42: Time-management, based on the perception of time, is a key element that differs between cultures and therefore will impact on your cross-cultural negotiations. What statement best describes what Edward T. Hall calls a ‘monochronic’ culture?",
    options: [
      "A. A culture that sees time in a linear fashion and therefore as a process that has to be sequenced into separate phases - open and closed - each contributing to an overall task, one after another.",
      "B. A culture whose participants are only comfortable doing one thing at a time. They have the hardest time managing two things at once or they take too much time on introductions.",
      "C. A culture thought of as managing tasks in a very equally divided - one hour one task - split of the working day."
    ],
    correct: [0]
  },
  {
    id: 43,
    question: "Câu 43: For Hall, how would a negotiator from a ‘polychronic’ culture perceive the negotiation style of someone from a ‘monochronic’ one? Which statement best fit your impression?",
    options: [
      "A. \"This person is always looking at her watch, she probably likes it very much and wants me to notice it\".",
      "B. This person is constantly looking at her watch. I wonder if maybe she needs to leave this meeting to attend to other more pressing business. I should tell her that I can wait for her, or that we could reconvene at another time. I too have other projects to take care of.",
      "C. She keeps looking at her watch, she must be in a rush to finish this deal. Ok, time to hurry up. I can make things easier for her."
    ],
    correct: [1]
  },
  {
    id: 44,
    question: "Câu 44: On the other side of the table, Ms. B, an American business lawyer, is thinking:",
    options: [
      "A. If I keep staring at my watch there is no way he's not going to understand that we're on a tight time schedule and that we've not made any progress since we began these negotiations.",
      "B. My oh my, 4pm already and we're still talking about item #1 on the agenda. He keeps coming back with the same argument over and over and prevents this deal from moving forward. Incredible!",
      "C. This deal is going nowhere. I might as well kick back and relax. I will deal with my boss when I get back to the office. Let's enjoy this moment."
    ],
    correct: [1]
  },
  {
    id: 45,
    question: "Câu 45: Communication takes place through the mobilization of various means and capacities. Direct communication is often thought of as the use of language to express one's thoughts. However, also very important for conveying meaning is the understanding of non-verbal cues. Among the following propositions, which one best describes non-verbal means of communicating?",
    options: [
      "A. Glances, looks, hand gestures, nodding of the head, tongue clicking, facial expressions and more.",
      "B. Any word that is made up.",
      "C. Songs, poetry, artistic expression."
    ],
    correct: [0]
  },
  {
    id: 46,
    question: "Câu 46: Which “experience” would you be best advised not to repeat?",
    options: [
      "A. A few years ago, while attempting to create a good atmosphere before a hard negotiation...",
      "B. A while back, you were a junior associate at the time... wore your best wax shirt, bought last summer in Senegal...",
      "C. Just last month - the learning never stops - you remember a boardroom meeting in your new offices in Shanghai. During the introduction to new board members, you caught yourself writing a quick note on a piece of paper in your coat pocket... only to realize that it was your new principal's business card."
    ],
    correct: [2]
  },
  {
    id: 47,
    question: "Câu 47: It is more crucial to develop a cultural adaptation strategy when you are...",
    options: [
      "A. ... given a very strict mandate, negotiating at home, within a multilateral context.",
      "B. ... negotiating a bilateral agreement in your counterpart's setting when you know your level of interdependency is rather strong.",
      "C. ... negotiating with Rome, in Rome the implementation of a project involving the members of the F.A.O."
    ],
    correct: [1]
  },
  {
    id: 48,
    question: "Câu 48: Interpersonal factors play a key role in assessing your need for implementing a cultural adaptation strategy. It is especially the case if...",
    options: [
      "A. You have little knowledge of your counterpart's cultural traits, you're very new to the world of negotiation and feel uneasy regarding your new abilities. On top of that, you have never met the person who will negotiate for your company's counterpart.",
      "B. You've known Mr Chu for more than 10 years...",
      "C. You're starting with this new international investment firm. You've known Mrs McDowell since business school..."
    ],
    correct: [0]
  },
  {
    id: 49,
    question: "Câu 49: In which of the following three cases do you consider the approach adopted to be coherent with the details of the situations:",
    options: [
      "A. You are a recent French hire in a top American company...",
      "B. You've lived in Japan for the best part of three years now... recommend they let you be the go-between...",
      "C. You have been scheduled to head your company's delegation to negotiate a major expansion contract in Sao Paulo next month. While researching the other team's profile, you recognize their main negotiator as someone you've made successful deals with many times over. You get in touch with her and suggest that negotiations proceed according to mutually agreed terms as you go along."
    ],
    correct: [2]
  },
  {
    id: 50,
    question: "Câu 50: 'An adaptation strategy is only to be designed and implemented when one wants to please one's counterpart'. How do you react to this statement?",
    options: [
      "A. It is a negotiation where something has to be gained. No trick is off limit...",
      "B. We've known this country's negotiating style for a very long time...",
      "C. A cultural adaptation strategy implies first and foremost maintaining critical thinking on the issues at stake and paying attention to the relationship you want with your counterpart. It is always important to be careful and adaptive."
    ],
    correct: [2]
  },
  {
    id: 51,
    question: "Câu 51: Based on your understanding of cultural profiling, in which of the following countries are you most likely to be facing a negotiator who will not be the actual final decision-maker:",
    options: [
      "A. Belgium, France and Germany: in Europe, negotiators are always the final bosses...",
      "B. China, Singapore and Korea: mainly collectivistic, these countries are very much driven by 'supreme leaders' who remains silent or absent during talks.",
      "C. Egypt, Lebanon and Jordan compose an ensemble of countries..."
    ],
    correct: [1]
  },
  {
    id: 52,
    question: "Câu 52: In consensus-oriented cultures, negotiators will behave in which of the following ways:",
    options: [
      "A. They will deploy considerable effort to avoid entering into a conflict with their counterparts...",
      "B. They will look to create an internal consensus on which to base a final decision. It requires the lead negotiator to look for a lot of information to get his team agreed on a position. The process is long but the decision is sound and there is a low risk of internal defection.",
      "C. They will consult extensively, ask a lot of questions... decision is taken by the lead negotiator..."
    ],
    correct: [1]
  },
  {
    id: 53,
    question: "Câu 53: In a third type of cultural setting, one finds agents who are characterized by a specific relationship of 'representation' to their principals. Which proposition best suits this idea:",
    options: [
      "A. Bottom-up: the negotiator is in charge of managing the deal...",
      "B. Horizontal deal-making: in this setting, the lead negotiator and his principal share...",
      "C. Delegated decision-making: the agent is actually a representative of the principal and has the formal authorization to speak on the group's behalf. The agent (who has some leeway) and the principal are in constant communication throughout the negotiation."
    ],
    correct: [2]
  },
  {
    id: 54,
    question: "Câu 54: When negotiating internationally, a negotiator should identify and take into account specificities regarding the international framework of a negotiation, notably:",
    options: [
      "A. Behaviours at the negotiation table",
      "B. Values",
      "C. Personality",
      "D. Assumptions"
    ],
    correct: [0, 1, 3]
  },
  {
    id: 55,
    question: "Câu 55: Within European institutions, negotiations are constant. No decision can be the result of unilateral decisions, while consensus and procedural fairness are the norms. When negotiating with EU officials, what can you least expect?",
    options: [
      "A. Treachery, dishonesty and below-the-table tactics",
      "B. Intractable decision-making processes",
      "C. Bribery and corruption"
    ],
    correct: [0, 2]
  },
  {
    id: 56,
    question: "Câu 56: The European Union is, as we write, 28 member strong, representing an internal market of more than 400 million customers. To apply the decisions reached by the European Parliament and the Council of Ministers, the European Commission is a 30,000 person corps (smaller than the US bureaucracy in Washington, in comparison). How would you best describe the negotiation style of these civil servants?",
    options: [
      "A. Consensus-driven",
      "B. Cooperative usually",
      "C. Are you sure you've paid attention to the previous chapters and lectures in this MOOC? Check your assumptions and prejudice and pay close attention to the person you negotiate with ; her background, her and her unit's interests in the subject, the political salience of the issue for the member-states..."
    ],
    correct: [2]
  },
  {
    id: 57,
    question: "Câu 57: Above all, Chinese negotiators present a trait of character that can be destabilizing for their European counterparts. It is:",
    options: [
      "A. Its high context culture which implies that communication is indirect, replies are often understatements, with avoidance of open expressions of agreement and disagreement.",
      "B. The importance of gift-giving and entertainment as crucial aspects of the deal-making culture. Be ready to show your appreciation through pricy gifts and your commitment to making a deal through readiness to negotiate after 8pm.",
      "C. The reliance on non-committal tactics that add a layer of uncertainty when European negotiators attempt to report to their principals about the state of their negotiations in China."
    ],
    correct: [0]
  },
  {
    id: 58,
    question: "Câu 58: 'Guanxi', a Chinese term, most often translated as “relationship” is crucial for any negotiator attempting to enter into a business relationship in China. Building a strong relationship with a Chinese counterpart is best achieved by:",
    options: [
      "A. Taking into consideration how sensitive Chinese negotiators can be to their counterparts' effort to make their stay as comfortable and enjoyable as possible.",
      "B. Insisting on shaking hands as often as possible to show determination and honesty. A handshake, in China, is always a good indicator of the firmness of your position.",
      "C. Making a personal connection. Insisting on sharing personal family histories and getting to know the other negotiator's children, especially, will always be seen as a way to move a negotiation forward."
    ],
    correct: [0]
  },
  {
    id: 59,
    question: "Câu 59: US Diplomats tends to present themselves and their negotiating habits as “tough but fair”. But how do other countries' diplomatic corps usually see them?",
    options: [
      "A. “tough but fair”: that's right. American diplomats play openly and very rarely resort to strong-arm tactics to get their way.",
      "B. “American interests first, the rest: second”. Used to global dominance in most areas, the USA has never been known to hesitate advocating and serving its own interests at the expense of other, less powerful nations.",
      "C. “a benevolent hegemony”: what is the point of being powerful and relying on unsurpassed power if it is not be a “beacon for the world”?"
    ],
    correct: [1]
  },
  {
    id: 60,
    question: "Câu 60: Which profession has had the most influence and impact on crafting the very particular style of US negotiators?",
    options: [
      "A. Blacksmith: while the issue is hot, hammer it with blunt force to shape it into what you want.",
      "B. Grape-pickers: one is best advised to pick grapes when they are ripest.",
      "C. Lawyers: negotiating means getting a deal and its complete details down on paper to prevent anyone from finding loopholes."
    ],
    correct: [2]
  },
  {
    id: 61,
    question: "Câu 61: Time is a 'currency' one needs to understand to appreciate middle-eastern cultures. In this respect which skills would you need to develop in order to best advance your future negotiations on the eastern shores of the mediteranean?",
    options: [
      "A. Time management: a good negotiator always keeps time under control.",
      "B. Quality time: a good negotiator knows how to make time productive.",
      "C. Patience: “why are you running like this? Sit down, have coffee with me and let's talk a little before you have to go”."
    ],
    correct: [2]
  },
  {
    id: 62,
    question: "Câu 62: Negotiations are seen as a personal investment where trust in the other negotiator is of the essence. As a consequence, negotiators commit their word, their 'face' in a sense, and would suffer a personal loss if they were to go back on their word. In such a context, what should you expect in building strong personal relationships?",
    options: [
      "A. Invest your personal time by accepting to stay a little longer after the meeting to exchange a few words.",
      "B. Allow your counterpart to ask personal questions about you and \"let him or her in\": allowing someone to get to know you more is a skill you need.",
      "C. Accept an invitation to a hammam from a business partner. Middle-eastern negotiators, like their Scandinavian counterparts, often share a bath in order to close a deal."
    ],
    correct: [0, 1]
  },
  {
    id: 63,
    question: "Câu 63: The 21st Conference of the Parties to the United Nations Convention on Climate Change took place in Paris in the fall of 2015. The main lessons of these negotiations for chief negotiators are:",
    options: [
      "A. Prepare seriously, know your counterparts, hear others' concerns and play on these concerns to push your agenda.",
      "B. Prepare thoroughly if you do not want to fail, build trust before you need it, listen actively to gather up information before you start negotiating, clarify your mandate and pace yourself in order to resist fatigue.",
      "C. Know your national interests, prepare the negotiations by knowing your adversary's weaknesses, exploit them and ensure that your own state's interests come first."
    ],
    correct: [1]
  },
  {
    id: 64,
    question: "Câu 64: When it comes to advocating climate change measures, the whole world is concerned. The extent to which changes need to take place (in technology, policy, habits, means of development and production, transport and trade, to cite just a few areas) imposed negotiation seems the only means through which agreements can be built. Multilateral negotiations are best characterized by:",
    options: [
      "A. Their complexity: multilateral negotiations require exchanges between dozens, if not hundreds, of delegates on very complicated issues. Organization is fundamental.",
      "B. Their complexity: multilateral negotiations demand that the Chairperson works to organize a path to consensus and reduce the many different views and opinions to a few that can be discussed. Management is key.",
      "C. Their complexity: multilateral negotiations, such as the COPs, are carefully watched by hundreds of stakeholders, from industrial lobbies to environmental groups, to citizens and others. Inclusiveness of all opinions and management of transparency is essential."
    ],
    correct: [0, 1, 2]
  },
  {
    id: 65,
    question: "Câu 65: Which of the following DO NOT apply to the definition of mediation?",
    options: [
      "A. Mediation is a process of dialogue",
      "B. Mediation is a process of negotiation",
      "C. The mediator works to achieve a fair deal for all parties",
      "D. The mediator facilitates the growth of improved mutual understanding between the parties",
      "E. The mediator will step out of his/her neutral stance if necessary."
    ],
    correct: [1, 2, 4]
  },
  {
    id: 66,
    question: "Câu 66: In general, the mediator aims at facilitating the emergence of a solution in a non-directive manner. However, he/she may resort to a directive approach when:",
    options: [
      "A. The mediator perceives the possible materialisation of a \"solution\" to a conflict with which they have become familiar.",
      "B. The mediator perceives that either one of the parties is deliberately blocking a solution through stalling tactics.",
      "C. The mediator perceives that one or both of the parties are beginning to resort to conflictual tactics to push through their goals."
    ],
    correct: [0, 1, 2]
  },
  {
    id: 67,
    question: "Câu 67: Which of the following issues related to “interaction dynamics” justify the use of mediation?",
    options: [
      "A. The parties have little or no trust in each other.",
      "B. Communication is poor, thus generating mutual miscomprehension.",
      "C. Initial negotiation among the parties has given way to a wish to mediate.",
      "D. Values and assumptions are at loggerheads and neither party is able to comprehend those of the other."
    ],
    correct: [0, 1, 3]
  },
  {
    id: 68,
    question: "Câu 68: Emotions may also be a reason for the use of mediation. Which of the following statements is FALSE concerning this topic?",
    options: [
      "A. Emotions between the parties may be so intense and negative that dialogue is itself distorted or destructive.",
      "B. The mediator's role will be to avoid these emotions in order to foster a non-aggressive atmosphere at the table.",
      "C. Some mediators will separate the parties in \"caucuses\" to explore the historical and psychological origins of these strong emotions.",
      "D. The mediator will allow for some controlled confrontation and expression of negative emotions."
    ],
    correct: [1]
  },
  {
    id: 69,
    question: "Câu 69: Match up the following role a mediator plays with its description: \"Referee–watchdog\"",
    options: [
      "A. Especially the case in circumstances where s/he has substantial professional expertise and knowledge that may have a direct bearing on the mode of resolution and dispute",
      "B. Remind parties of the risks and costs of possible solutions, as well as their opportunities",
      "C. Regulate behaviours and avoid any excesses that can be unproductive or dysfunctional during the sessions.",
      "D. Help the parties find pathways to innovative perspectives and solutions."
    ],
    correct: [2]
  },
  {
    id: 70,
    question: "Câu 70: Match up the following roles a mediator plays with its description: \"Leader and authority\"",
    options: [
      "A. Especially the case in circumstances where s/he has substantial professional expertise and knowledge that may have a direct bearing on the mode of resolution and dispute",
      "B. Remind parties of the risks and costs of possible solutions, as well as their opportunities",
      "C. Regulate behaviours and avoid any excesses that can be unproductive or dysfunctional during the sessions.",
      "D. Help the parties find pathways to innovative perspectives and solutions."
    ],
    correct: [0]
  },
  {
    id: 71,
    question: "Câu 71: Match up the following roles a mediator plays with its description: \"Problem and resource explorer\"",
    options: [
      "A. Especially the case in circumstances where s/he has substantial professional expertise and knowledge that may have a direct bearing on the mode of resolution and dispute",
      "B. Remind parties of the risks and costs of possible solutions, as well as their opportunities",
      "C. Regulate behaviours and avoid any excesses that can be unproductive or dysfunctional during the sessions.",
      "D. Help the parties find pathways to innovative perspectives and solutions."
    ],
    correct: [3]
  },
  {
    id: 72,
    question: "Câu 72: Which of the following DOES NOT apply to the description of the role of ‘Communicator-facilitator’ the mediator must play?",
    options: [
      "A. Guarantee in some way an equitable and balanced interaction between the parties.",
      "B. Use all his/her psychological skills to generate constructive communication.",
      "C. Help them transcend rigid or over-dogmatic positions.",
      "D. Break out of norms that inhibit the finding of creative solutions to problems."
    ],
    correct: [3]
  },
  {
    id: 73,
    question: "Câu 73: What are the features which distinguish mediation from arbitration or a judiciary system?",
    options: [
      "A. Mediation is a voluntary process",
      "B. A deal will be found only if everybody agrees",
      "C. Parties may leave the mediation process any time",
      "D. Mediation is based on consensus",
      "E. Unlike judges or arbitrators, mediators do not decide in the end"
    ],
    correct: [0, 1, 2, 3, 4]
  },
  {
    id: 74,
    question: "Câu 74: What is the definition of 'an inclusive agreement' in mediation terms?",
    options: [
      "A. An inclusive agreement in mediation terms is when all the dimensions of the conflict have been covered, innovative solutions have been put on the table, and the various parties have reached consensus on the selected solutions.",
      "B. An inclusive agreement in mediation terms is when all the dimensions of the conflict have been covered, innovative solutions have been put on the table, and the various stakeholders accept judgement on a solution offered by the mediator and agree to adopt it even if it is not necessarily 100% liked.",
      "C. An inclusive agreement in mediation terms is when various blocking points have been ceded by one or both parties in order for a majority of stakeholders to select a given solution endorsed and recommended by the mediator."
    ],
    correct: [0]
  },
  {
    id: 75,
    question: "Câu 75: It is highly important to set the rules of the game before beginning the mediation. Which of the following IS NOT a rule that applies to mediation?",
    options: [
      "A. Full confidentiality of what is said in the sessions.",
      "B. No interruption, and mutual respect. You will give the floor.",
      "C. No emotions. Parties are to speak in a measured, respectful manner.",
      "D. Full deniability. Should any confidential information leak out of the room, the other party is perfectly allowed to deny it.",
      "E. Parties agree to commit to implement any agreement – keeping that in mind, by definition, there will be an agreement only if both parties agree."
    ],
    correct: [2, 3]
  },
  {
    id: 76,
    question: "Câu 76: Which of the following pieces of advice are valid regarding obtaining the commitment of both parties to the package of solutions?",
    options: [
      "A. Help the parties realize that these solutions are legitimate – even though they do not like them.",
      "B. Link justifications to the legal system, benchmarks or precedents.",
      "C. If blockage is encountered, foster trade-offs.",
      "D. Refrain from letting parties compare these solutions with those found away-from-the-table."
    ],
    correct: [0, 1, 2]
  },
  {
    id: 77,
    question: "Câu 77: Preparing as a party for mediation involves going through a 3-point checklist. Is the following RIGHT or WRONG? First, what do you absolutely need to tell during the meeting? Second, what should you not tell during the meeting? Third, which questions would you like to ask?",
    options: [
      "A. Right",
      "B. Wrong"
    ],
    correct: [0]
  },
  {
    id: 78,
    question: "Câu 78: Which of the following statements are relevant to justify solutions that are put on the table?",
    options: [
      "A. This solution has a precedent in the industrial dispute of 2015 involving the car workers union and senior management at one of their site.",
      "B. This solution is understandably a right one to choose because it makes common sense.",
      "C. This solution is similar to that agreed upon in court following a case of harassment in the armed forces.",
      "D. This solution is obviously a fair one. If you don't agree on it, our talks will most probably break down.",
      "E. This solution is worth considering, especially if we compare it to the solution decided last year by the Manchester subsidiary."
    ],
    correct: [0, 2, 4]
  },
  {
    id: 79,
    question: "Câu 79: As a mediator it is recommended to ask each party to send you, on a confidential basis, a short memo on the questions they would like to raise and which solutions they envisage. Why?",
    options: [
      "A. Such a memo will serve a key purpose: help both parties get prepared for the upcoming sessions.",
      "B. Such a memo will serve two purposes. One: provide you with both perspectives on the situation. Second, help both parties get prepared for the upcoming sessions.",
      "C. Such a memo will serve three purposes. One: provide you with both perspectives on the situation. Second, help both parties get prepared for the upcoming sessions. Third: increase the power of influence you have over persuading either of the two parties to accept the other's solution."
    ],
    correct: [1]
  },
  {
    id: 80,
    question: "Câu 80: Which statement is WRONG?",
    options: [
      "A. In FACILITATIVE mediation, the mediator tries, in a low-profile way, to provide a minimal framework for meaningful communication between the parties.",
      "B. In the FORMULATIVE approach, the mediator turns into a leader, threatening or rewarding parties in order to get concessions until they accept the agreement. Here, purists would say this is no longer a genuine mediation."
    ],
    correct: [1]
  },
  {
    id: 81,
    question: "Câu 81: Which statement is RIGHT?",
    options: [
      "A. In the MANIPULATIVE approach: the mediator turns into a leader, threatening or rewarding parties in order to get concessions until they accept the agreement. Here, purists would say this is no longer a genuine mediation.",
      "B. In DIRECTIVE mediation, the mediator turns into a leader, providing a minimal framework for meaningful communication between the parties."
    ],
    correct: [0]
  },
  {
    id: 82,
    question: "Câu 82: As a working method, joint meetings are helpful when:",
    options: [
      "A. Parties need to settle an issue – such as the amount of a compensation – but do not need to fix a relationship in order to face a shared future",
      "B. A core objective of the mediation is to help both parties fix their relationship in order to keep on co-working together.",
      "C. Parties have reached a stalemate. Whenever parties refuse to move towards a possible deal it is essential to force them to come together, face to face, and directly explain the reasons why they do not wish to commit, in order to find a new solution."
    ],
    correct: [1]
  },
  {
    id: 83,
    question: "Câu 83: The judicial process is based on transparency; the mediation process is based on confidentiality. Why?",
    options: [
      "A. Non-confidentiality exposes the parties and their conflict to the scrutiny of a wider audience, which can further deteriorate the situation",
      "B. Mediation creates a safe sphere of dialogue in which all parties may share all the information they have.",
      "C. Non-confidentiality – and therefore transparency to the outside – will not help solve the conflict in a mutually acceptable way",
      "D. Sharing more information will help parties go to the root causes of the conflict, and therefore address the situation in an effective manner."
    ],
    correct: [0, 1, 2, 3]
  },
  {
    id: 84,
    question: "Câu 84: What advice is valid for closing the mediation?",
    options: [
      "A. Avoid rushing to conclusions in the end of the mediation cycle and wrap up things correctly",
      "B. Make sure there is no misunderstanding, and no missing point",
      "C. Take down the names of all those present and make them sign a presence sheet as proof of the validity for the agreement",
      "D. Clarify what has been agreed on, but also how this agreement will be implemented",
      "E. Remember to congratulate the parties for their productive involvement"
    ],
    correct: [0, 1, 3, 4]
  },
  {
    id: 85,
    question: "Câu 85: “Inexperienced mediators fall into this trap because they think such rules are ‘childish’, or ‘unnecessary’...What classic mistake is this statement describing?",
    options: [
      "A. Letting your own interests influence the mediation",
      "B. Prematurely closing the mediation",
      "C. Failing to control the flow of information and expression",
      "D. Forgetting to set the ground rules"
    ],
    correct: [3]
  },
  {
    id: 86,
    question: "Câu 86: The mediator may choose 3 working formats. Match up the working following format with the right statement: Separate meetings only: the mediator will meet with each party alone, sequentially.",
    options: [
      "A. In many cases, the perspective of being stuck in without a deal, proves less interesting for the parties than the compromise on the mediation table.",
      "B. Both parties need to vent something, with the other listening and acknowledging",
      "C. In day-to-day situations, this method is useful when parties need to settle an issue – such as the amount of a compensation – but do not need to fix a relationship in order to face a shared future."
    ],
    correct: [2]
  },
  {
    id: 87,
    question: "Câu 87: The mediator may choose 3 working formats. Match up the working formats with the following statements: Joint meetings only: the mediator will systematically convene all parties together.",
    options: [
      "A. In many cases, the perspective of being stuck in without a deal, proves less interesting for the parties than the compromise on the mediation table.",
      "B. Both parties need to vent something, with the other listening and acknowledging",
      "C. In day-to-day situations, this method is useful when parties need to settle an issue – such as the amount of a compensation – but do not need to fix a relationship in order to face a shared future."
    ],
    correct: [1]
  },
  {
    id: 88,
    question: "Câu 88: The mediator may choose 3 working formats. Match up the working formats with the following statements: A mix of both: the mediator will alternate plenary meetings and separate meetings.",
    options: [
      "A. In many cases, the perspective of being stuck in without a deal, proves less interesting for the parties than the compromise on the mediation table.",
      "B. Both parties need to vent something, with the other listening and acknowledging",
      "C. In day-to-day situations, this method is useful when parties need to settle an issue – such as the amount of a compensation – but do not need to fix a relationship in order to face a shared future."
    ],
    correct: [0]
  },
  {
    id: 89,
    question: "Câu 89: Professors Budd and Colvin propose a framework for assessing the dispute resolution process. It consists in 3 criteria:",
    options: [
      "A. Evaluation, equity and voice",
      "B. Efficiency, equity and voice",
      "C. Grudge, grievance and dispute",
      "D. Efficiency, evaluation and voice"
    ],
    correct: [1]
  },
  {
    id: 90,
    question: "Câu 90: What are the pros and cons of the different dispute procedures as assessed by Budd and Colvin’s framework? (Non-union arbitration)",
    options: [
      "A. These may be quick and cost-effective but lack accountability to employees and employee representatives",
      "B. These will usually have been negotiated beforehand and involve procedures which increase voice and accountability",
      "C. These score well in equity and defence of rights but can be slow, costly and relatively inefficient"
    ],
    correct: [0]
  },
  {
    id: 91,
    question: "Câu 91: What are the pros and cons of the different dispute procedures as assessed by Budd and Colvin’s framework? (Union dispute procedures)",
    options: [
      "A. These may be quick and cost-effective but lack accountability to employees and employee representatives",
      "B. These will usually have been negotiated beforehand and involve procedures which increase voice and accountability",
      "C. These score well in equity and defence of rights but can be slow, costly and relatively inefficient"
    ],
    correct: [1]
  },
  {
    id: 92,
    question: "Câu 92: What are the pros and cons of the different dispute procedures as assessed by Budd and Colvin’s framework? (Judicial litigation)",
    options: [
      "A. These may be quick and cost-effective but lack accountability to employees and employee representatives",
      "B. These will usually have been negotiated beforehand and involve procedures which increase voice and accountability",
      "C. These score well in equity and defence of rights but can be slow, costly and relatively inefficient"
    ],
    correct: [2]
  },
  {
    id: 93,
    question: "Câu 93: The Settlement conference model of mediation aims at reaching an agreement or deal that will keep the parties away from litigation and the courts. As such, the role of the mediator changes – how?",
    options: [
      "A. His/her role requires non-interference and non-judgement and supposes easing the parties involved towards awareness of each other’s arguments and therefore readiness to find a win-win solution.",
      "B. His/her role requires being the representative of the company and its HR and legal teams to pass on an assessment before the company offers a solution.",
      "C. His/her role requires a more directive approach and style, negotiating for the parties within the constraints of the law and ultimately proposing solutions."
    ],
    correct: [2]
  },
  {
    id: 94,
    question: "Câu 94: Mediation in the case of harassment at work requires special attention. Which of the following are valid?",
    options: [
      "A. Because of the weight of prejudice and bias, particularly in the domain of gender relations, where it is often unconscious, “mediator neutrality”; may require careful exploration and analysis, both before and after intervention",
      "B. Asymmetries of power between the two parties, and the possibility of strong influence on the process by a dominant party, both demand high levels of vigilance on the part of the mediator with regard to confidentiality, the inclusion and roles of advisors and the traps of manipulation",
      "C. Mediation in cases of harassment should only be of a formal, tightly controlled nature presided over by the HR director and a senior union official."
    ],
    correct: [0, 1]
  },
  {
    id: 95,
    question: "Câu 95: Third-party involvement in an industrial relations dispute between unions and management can be extremely beneficial. What important role can mediation play?",
    options: [
      "A. Mediation avoids emotions becoming too extreme",
      "B. Third-party mediation is a way of judging the proposals coming from each side",
      "C. Mediation with a third-party eliminates strikes",
      "D. Mediation is less costly than both strike action and going through industrial tribunals and courts"
    ],
    correct: [0, 3]
  },
  {
    id: 96,
    question: "Câu 96: What major criteria must a mediator/conciliator possess to obtain legitimacy among management and union parties?",
    options: [
      "A. They must be known to each party",
      "B. They must be regarded as professionals",
      "C. They must be from the same organisation or firm",
      "D. They must be perceived as skilled and reliable",
      "E. They must be perceived as neutral"
    ],
    correct: [1, 3, 4]
  },
  {
    id: 97,
    question: "Câu 97: What is the correct definition of the 4-Step mediation model?",
    options: [
      "A. The goal is to maintain the relationship between parties while implementing a four-step process that involves 1) Inviting each party to explain their case 2) Inviting each party to see the issue from the other’s perspective 3) Requesting a reformulation of the parties initial case explanation and 4) Inviting both parties to propose solutions and find agreement.",
      "B. The goal is to reach an agreement or deal that will keep the parties away from litigation and the courts. Here the mediator may be rather more directive in approach and style, and is really trying to “negotiate for the parties”, with the constraints of law in mind.",
      "C. The goal is to maintain the relationship between the parties while initiating a process of dialogue between them that can generate a solution which they feel they can “own”. This is close to the mediation “facilitator-communicator” role."
    ],
    correct: [0]
  },
  {
    id: 98,
    question: "Câu 98: To what negotiation model does the following statement refer to? ‘In the first two steps the mediator encourages each party to freely “tell their story” without intervention from the other. The mediator practices active listening and rephrasing (or “looping” and elicits the deeper interests and needs of each party in turn’",
    options: [
      "A. The Settlement conference model",
      "B. 4-Step mediation model"
    ],
    correct: [1]
  },
  {
    id: 99,
    question: "Câu 99: The neutrality of any third party is a crucial issue for industrial dispute negotiations. Why?",
    options: [
      "A. Both parties are initially distrustful of any third party being integrated to the negotiations",
      "B. Unions are concerned about management specialists wanting to dominate procedures and to channel actions towards outcomes favourable to them",
      "C. Management believes that third parties usually favor employees over the company’s interests",
      "D. Unions see third parties as a way for management to keep its distance and to avoid direct negotiation",
      "E. Unions will often fear being by-passed or co-opted by a process where, at the end of the day, employees are poorly represented"
    ],
    correct: [1, 2, 4]
  },
  {
    id: 100,
    question: "Câu 100: Which of the following industrial disputes would NOT be resolved by referring to national laws and sector- specific/workplace agreements?",
    options: [
      "A. In the case of a performance appraisal and a complaint on ‘management bias’ from the employee",
      "B. Dispute between teams and stakeholders within the company on prioritizing deadlines for a project",
      "C. A labour dispute between rail workers and management over pay and a lightning strike that train drivers threaten to carry out if their demands are not met."
    ],
    correct: [1]
  },
  {
    id: 101,
    question: "Câu 101: What's the best strategy to take when you feel there's going to be no deal?",
    options: [
      "A. Step back and analyse the situation to effectively understand why there's no deal.",
      "B. Adopt an aggressive, competitive style of negotiating to force the other negotiator to weaken resistance to your proposals."
    ],
    correct: [0]
  }
];
