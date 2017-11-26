import * as express from 'express';
import * as validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import moderatorCtrl from '../controllers/moderator.controller';

const router = express.Router();

router.route('/')
  .get(moderatorCtrl.list)
  .post(validate(paramValidation.createMod), moderatorCtrl.create)

router.route('/rm')
  .post(validate(paramValidation.removeMod), moderatorCtrl.remove)

router.route('/beneficiaries')
  .get(moderatorCtrl.listBeneficiaries)

export default router;
