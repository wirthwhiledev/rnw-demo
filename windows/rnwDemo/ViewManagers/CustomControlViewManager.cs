using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Controls;
using Microsoft.ReactNative.Managed;
using rnwDemo.Controls;

namespace rnwDemo.ViewManagers
{
	internal class CustomControlViewManager : AttributedViewManager<AaronsCustomControl>
	{
		[ViewManagerProperty("label")]
		public void SetLabel(AaronsCustomControl view, string value)
		{
			if (null != value)
			{
				view.Label = value;
			}
			else
			{
				view.ClearValue(AaronsCustomControl.LabelProperty);
			}
		}

		[ViewManagerProperty("color")]
		public void SetColor(AaronsCustomControl view, Brush value)
		{
			if (null != value)
			{
				view.Foreground = value;
			}
			else
			{
				view.ClearValue(Control.ForegroundProperty);
			}
		}

		[ViewManagerProperty("backgroundColor")]
		public void SetBackgroundColor(AaronsCustomControl view, Brush value)
		{
			if (null != value)
			{
				view.Background = value;
			}
			else
			{
				view.ClearValue(Control.BackgroundProperty);
			}
		}

		[ViewManagerCommand]
		public void CustomCommand(AaronsCustomControl view, IReadOnlyList<object> commandArgs)
		{
			// Execute command
		}
	}
}
