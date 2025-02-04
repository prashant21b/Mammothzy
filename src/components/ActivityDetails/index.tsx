import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Define the form data interface
interface FormData {
  activityName?: string;
  category?: string;
  description?: string;
  activityType?: string;
  locationType?: string;
  minMembers?: string;
  maxMembers?: string;
}

interface ActivityDetailsProps {
  onNext: (data: FormData) => void; // Specify the type for the onNext function
  formData: FormData; // Use the defined FormData type
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({ onNext, formData }) => {
  const formik = useFormik({
    initialValues: {
      activityName: formData.activityName || '',
      category: formData.category || '',
      description: formData.description || '',
      activityType: formData.activityType || '',
      locationType: formData.locationType || '',
      minMembers: formData.minMembers || '',
      maxMembers: formData.maxMembers || '',
    },
    validationSchema: Yup.object({
      activityName: Yup.string().required('Activity name is required'),
      category: Yup.string().required('Category is required'),
      description: Yup.string().required('Description is required'),
      activityType: Yup.string().required('Activity type is required'),
      locationType: Yup.string().required('Location type is required'),
      minMembers: Yup.string().required('Minimum members required'),
      maxMembers: Yup.string().required('Maximum members required'),
    }),
    onSubmit: (values) => {
      onNext(values); // Pass validated values to the onNext function
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Activity Details</h2>

      {/* Activity Name */}
      <label>
        Activity Name <span className="required">*</span>
        <input
          type="text"
          name="activityName"
          onChange={formik.handleChange}
          value={formik.values.activityName}
          placeholder="E.g., Cooking class in Palo Alto"
          className="input-field"
        />
        {formik.errors.activityName && <div className="error">{formik.errors.activityName}</div>}
      </label>

      {/* Category - Radio Buttons */}
      <label>
        Select Category <span className="required">*</span>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="category-adventure"
              name="category"
              value="Adventure & Games"
              onChange={formik.handleChange}
              checked={formik.values.category === 'Adventure & Games'}
            />
            <label htmlFor="category-adventure">Adventure & Games</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="category-creative"
              name="category"
              value="Creative Expression"
              onChange={formik.handleChange}
              checked={formik.values.category === 'Creative Expression'}
            />
            <label htmlFor="category-creative">Creative Expression</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="category-food"
              name="category"
              value="Food & Drink"
              onChange={formik.handleChange}
              checked={formik.values.category === 'Food & Drink'}
            />
            <label htmlFor="category-food">Food & Drink</label>
          </div>
        </div>
        {formik.errors.category && <div className="error">{formik.errors.category}</div>}
      </label>

      {/* Description */}
      <label>
        About the Activity <span className="required">*</span>
        <textarea
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          placeholder="Activity description"
          className="input-field"
        />
        {formik.errors.description && <div className="error">{formik.errors.description}</div>}
      </label>

      {/* Activity Type - Radio Buttons */}
      <label>
        Select Activity Type <span className="required">*</span>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="activityType-indoor"
              name="activityType"
              value="Indoor"
              onChange={formik.handleChange}
              checked={formik.values.activityType === 'Indoor'}
            />
            <label htmlFor="activityType-indoor">Indoor</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="activityType-outdoor"
              name="activityType"
              value="Outdoor"
              onChange={formik.handleChange}
              checked={formik.values.activityType === 'Outdoor'}
            />
            <label htmlFor="activityType-outdoor">Outdoor</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="activityType-virtual"
              name="activityType"
              value="Virtual"
              onChange={formik.handleChange}
              checked={formik.values.activityType === 'Virtual'}
            />
            <label htmlFor="activityType-virtual">Virtual</label>
          </div>
        </div>
        {formik.errors.activityType && <div className="error">{formik.errors.activityType}</div>}
      </label>

      {/* Location Type - Radio Buttons */}
      <label>
        Select Location Type <span className="required">*</span>
        <div className="radio-group">
          <div className="radio-option">
            <input
              type="radio"
              id="locationType-provider"
              name="locationType"
              value="Provider Location"
              onChange={formik.handleChange}
              checked={formik.values.locationType === 'Provider Location'}
            />
            <label htmlFor="locationType-provider">Provider Location</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="locationType-user"
              name="locationType"
              value="User Location"
              onChange={formik.handleChange}
              checked={formik.values.locationType === 'User Location'}
            />
            <label htmlFor="locationType-user">User Location</label>
          </div>
        </div>
        {formik.errors.locationType && <div className="error">{formik.errors.locationType}</div>}
      </label>

      {/* Minimum and Maximum Members */}
      <label>
        How many members can take part in the activity? <span className="required">*</span>
        <div className="member-fields">
          <input
            type="number"
            name="minMembers"
            onChange={formik.handleChange}
            value={formik.values.minMembers}
            placeholder="Min Members"
            className="input-field"
          />
          <input
            type="number"
            name="maxMembers"
            onChange={formik.handleChange}
            value={formik.values.maxMembers}
            placeholder="Max Members"
            className="input-field"
          />
        </div>
        {formik.errors.minMembers && <div className="error">{formik.errors.minMembers}</div>}
        {formik.errors.maxMembers && <div className="error">{formik.errors.maxMembers}</div>}
      </label>

      <button type="submit" className="primary">
        Save and Continue
      </button>
    </form>
  );
};

export default ActivityDetails;
