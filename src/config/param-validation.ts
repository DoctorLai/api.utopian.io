import * as Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      account: Joi.string().required(),
      code: Joi.string(),
      state: Joi.string(),
    }
  },
  createPost: {
    body: {
      author: Joi.string().required(),
      permlink: Joi.string().required(),
    }
  },
  createSponsor: {
    body: {
      account: Joi.string().required(),
    }
  },
  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },
  banUser: {
    body: {
      account: Joi.string(),
      banned: Joi.number().integer().min(0).max(9),
      bannedBy: Joi.string(),
      banReason: Joi.string(),
    },
    params: {
      userId: Joi.string(),
    }
  },
  createMod: {
    body: {
      account: Joi.string().required(),
      referrer: Joi.string(),
    },
    params: {
    }
  },
  removeMod: {
    body: {
      account: Joi.string().required(),
    },
    params: {
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
