import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ListTodo, PlusCircle } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-extrabold mb-6">
            Welcome to Dmello Todo Application
          </h1>
          <p className="text-2xl mb-8">
            Organize your tasks with simplicity and style!
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <Link to="/todos">
            <button className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center">
              Get Started
              <PlusCircle className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: ListTodo, title: "Organize Tasks", description: "Easily create and manage your to-do lists" },
            { icon: CheckCircle, title: "Track Progress", description: "Monitor your productivity and accomplishments" },
            { icon: PlusCircle, title: "Boost Productivity", description: "Streamline your workflow and get more done" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl"
            >
              <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <p className="text-lg mb-4">
            Join thousands of users who have transformed their productivity!
          </p>
          <div className="flex justify-center space-x-4">
            {['4.9', '10k+', '99%'].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full p-4">
                <span className="text-2xl font-bold">{stat}</span>
                <span className="text-sm block">{index === 0 ? 'Rating' : index === 1 ? 'Users' : 'Satisfaction'}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-300">
        Created by Aries Dmello TE IT A 21
      </footer>
    </div>
  );
};

export default LandingPage;