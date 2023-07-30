import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Julie and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Catalina',
          lastName: 'Jensen',
          areas: ['frontend', 'career'],
          description:
            'I am Catalina and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}
